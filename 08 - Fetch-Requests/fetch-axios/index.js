const baseUrl = "https://jsonplaceholder.typicode.com/todos";
let lista = [];
let todo = {
    title: "",
    userId: null,
    completed: false
};
const overlay = document.querySelector("#overlay");
const overlayFlexClass = "overlay-flex";

const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};

const getTodos = async () =>{
    overlay.classList.add(overlayFlexClass);
    try {
        const res = await axios.get(baseUrl)
        lista = res.data;
    } catch(err) {
        handleError(err);
    }
    overlay.classList.remove(overlayFlexClass);
};

const getTodo = async id => {
    await axios.get(`${baseUrl}/${id}`)
        .then(res => {
            todo = res.data;
        })
        .catch(handleError);
};

const createTodo = async (title, userId) => {
    overlay.classList.add(overlayFlexClass);
    let data = {
        title,
        userId,
        completed: false
    }
    try {
        const res = await axios.post(baseUrl, data)
        lista.push(res.data);
    }catch (err) {
        handleError(err);
    }
    overlay.classList.remove(overlayFlexClass);
};

const deleteTodo = async id => {
    overlay.classList.add(overlayFlexClass);
    try{
        const res = await axios.delete(`${baseUrl}/${id}`)
        const index = lista.findIndex(todo => {
            return todo.id == id;
        })
        lista.splice(index, 1);
    } catch(err) {
        handleError(err);
    }
    overlay.classList.remove(overlayFlexClass);
};

const modifyTodo = async (id, title, userId, completed) => {
    overlay.classList.add(overlayFlexClass);
    let data = {
        id,
        title,
        userId,
        completed
    };
    await axios.put(`${baseUrl}/${id}`, data)
    .then(res => {
        for (let i = 0; i < lista.length; i++) {
            if(lista[i].id == id) {
                lista[i] = res.data;
            }
        }
    })
    .catch(handleError);
    overlay.classList.remove(overlayFlexClass);
};

const armarHtml = () =>{
    const ul = document.querySelector("#todo-list");
    ul.innerHTML ="";
    for(let todo of lista) {
        const li = document.createElement("li");
        const id = document.createElement("span");
        const title = document.createElement("span");
        const userId = document.createElement("span");
        const completed = document.createElement("span");
        const eliminar = document.createElement("button");
        eliminar.innerText= "Eliminar";
        li.className="todo-item";
        title.setAttribute("class", "todo-title");
        id.setAttribute("class", "todo-id");
        userId.setAttribute("class", "todo-user");
        completed.setAttribute("class", "todo-completed");

        const titleText = document.createTextNode(todo.title);
        title.appendChild(titleText);
        
        const idText = document.createTextNode(todo.id);
        id.appendChild(idText);

        const userText = document.createTextNode(todo.userId);
        userId.appendChild(userText);

        const completedText = document.createTextNode(
            todo.completed ? "Completado": "Incompleto"
        );
        completed.appendChild(completedText);

        eliminar.addEventListener("click", async ()=>{
            await deleteTodo(todo.id);
            armarHtml();
        });

        li.appendChild(id);
        li.appendChild(title);
        li.appendChild(userId);
        li.appendChild(completed);
        li.appendChild(eliminar);
        ul.appendChild(li);
    }
}

const setCreateButton = () => {
    const createButton = document.querySelector('#todo-create');
    createButton.addEventListener('click', async () => {
        const title = document.querySelector('#todo-title-create').value;
        const user = document.querySelector('#todo-user-create').value;
        await createTodo(title, user);
        armarHtml();
    });
}

const setModifyButton = () => {
    const createButton = document.querySelector('#todo-update');
    createButton.addEventListener('click', async () => {
        const title = document.querySelector('#todo-title-update').value;
        const user = document.querySelector('#todo-user-update').value;
        const id = document.querySelector('#todo-id-update').value;
        const completed = document.querySelector('#todo-completed-update').checked;
        await modifyTodo(id, title, user, completed);
        armarHtml();
    });
}

const load = async () => {
    
    setCreateButton();
    setModifyButton();

    await getTodos();
    armarHtml();
}

load();


