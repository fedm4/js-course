const baseUrl = "https://jsonplaceholder.typicode.com/todos";
let lista = [];
let todo = {
    title: "",
    userId: null,
    completed: false
};

const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};

const getTodos = () =>{
    return axios.get(baseUrl)
        .then(res => {
            lista = res.data;
        })
        .catch(handleError);
};

const getTodo = id => {
    axios.get(`${baseUrl}/${id}`)
        .then(res => {
            todo = res.data;
        })
        .catch(handleError);
};

const createTodo = (title, userId) => {
    let data = {
        title,
        userId,
        completed: false
    }
    axios.post(baseUrl, data)
        .then(res => {
            lista.push(res.data);
        })
        .catch(handleError);
};

const deleteTodo = id => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(res => {
            const index = lista.findIndex(todo => {
                return todo.id == id;
            })
            lista.splice(index, 1);
        })
        .catch(handleError);
};

const modifyTodo = (id, title, userId, completed) => {
    let data = {
        id,
        title,
        userId,
        completed
    };
    axios.put(`${baseUrl}/${id}`, data)
        .then(res => {
            for (let i = 0; i < lista.length; i++) {
                if(lista[i].id == id) {
                    lista[i] = res.data;
                }
            }
        })
        .catch(handleError);
};

const armarHtml = () =>{
    const ul = document.querySelector("#todo-list");
    for(let todo of lista) {
        const li = document.createElement("li");
        const title = document.createElement("span");
        const eliminar = document.createElement("button");
        eliminar.innerText= "Eliminar";
        li.className="todo-item";
        //title.className="todo-title";
        title.setAttribute("class", "todo-title");

        const titleText = document.createElement(todo.title);

        title.appendChild(titleText);
        title.innerText = todo.title;

        eliminar.addEventListener("click", ()=>{
            deleteTodo(todo.id).then(armarHtml)
        });

        li.appendChild(title);
        ul.appendChild(li);
    }
}

getTodos().then(armarHtml);