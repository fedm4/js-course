// 001
const toggleChecked = () =>{
    const input = document.querySelector("#t-checked-input");
    if(input.checked) {
        input.checked = false;
    } else {
        input.checked = true;
    }
};

// 002
const changeAttrName = () =>{
    const miInput = document.querySelector("#miInput");
    miInput.setAttribute("name", "miExInput");
};

// 003
const addList = () =>{
    const listContainer = document.querySelector("#list-container");
    /*listContainer.innerHTML=`<ul id="list">
        <li class="list-el"></li>
        <li class="list-el"></li>
        <li class="list-el"></li>
        <li class="list-el"></li>
        <li class="list-el"></li>
    </ul>`;*/
    let ul = document.createElement("ul");
    
    for(i = 0; i < 10; i++) {
        let el = document.createElement("li");
        el.className = "list-el";
        ul.appendChild(el);
    }

    listContainer.appendChild(ul);
    //const elements = listContainer.children[0].children;
    //const elements = document.querySelector("#list").children;
    const elements = document.querySelectorAll(".list-el");
    for(i = 0; i < elements.length; i++) {
        //elements[i].innerHTML = i + 1;
        //elements[i].textContent = i + 1;
        let text = document.createTextNode(i + 1);
        elements[i].appendChild(text);
    }
};


// 004
const changeTitle = () =>{
    const title = document.querySelector("#title");
    let value = document.querySelector("#title-input").value;
    if(value == "") {
        value = "No Title";
    }
    title.textContent = value;
};