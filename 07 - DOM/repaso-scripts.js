const roleButton = document.querySelector("#role-button");
const addRole =  (id, name) => {
    employeesApp.roles.add(id, name);

} 
const addRoleToTable = (id, name) => {
    const body = document.querySelector("#roles-body");
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");

    tdId.innerHTML = id;
    
    const nameTextNode = document.createTextNode(name);
    tdName.appendChild(nameTextNode);

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    body.appendChild(tr);
}
const addRoleToSelect = (id, name) =>{
    const select = document.querySelector("#employee-role");
    const option = document.createElement("option");
    option.value = id;
    option.innerHTML = name;
    select.appendChild(option);
};
const handleRoleClick = () =>{
    const id = document.querySelector("#role-id-input").value;
    const name = document.querySelector("#role-input").value;
    addRole(id, name);   
    addRoleToTable(id, name);
    addRoleToSelect(id, name);
};
roleButton.addEventListener("click", handleRoleClick);

/////////////////////////////////////////////////////////////////////////////////
const employeeButton = document.querySelector("#employee-button");
const addEmployee = (id, name, role) => {
    employeesApp.employees.add(id, name, role);
};
const addEmployeeToTable = (id, name, roleName) => {
    const table = document.querySelector("#employees-body");
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdName = document.createElement("td");
    const tdRole = document.createElement("td");
    tdId.innerHTML = id;
    tdName.innerHTML = name;
    tdRole.innerHTML = roleName;
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdRole);

    table.appendChild(tr);

};
const handleEmployeeClick = () =>{
    const id = document.querySelector("#employee-id").value;
    const name = document.querySelector("#employee-name").value;
    const roleId = document.querySelector("#employee-role").value;
    const role = employeesApp.roles.findRole(roleId);
    addEmployee(id, name, role);
    addEmployeeToTable(id, name, role.name);
};
employeeButton.addEventListener("click", handleEmployeeClick);
