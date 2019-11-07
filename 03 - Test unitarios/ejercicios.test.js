/***************************************************
 * Desarrollar una función que reciba por parámetro
 * un día de la semana y devuelva el número que 
 * le corresponde.
 * Comenzar por los casos de test, y luego hacer 
 * la función.
 */
const lala = () => {

};
 /**************************************************
  * Desarrollar una función que convierta
  * de minutos a segundos. Pasar minutos por parámetro
  * y devolver los segundos.
  * Comenzar por los casos de test, y luego hacer la 
  * función. Recordar tirar errores y testearlos.
  */

/**************************************************
 * Hacer una serie de funciones para un TODO list.
 * Que me permita cargar una tarea, con un titulo, 
 * descripcion de tarea, y si fue hecha o no, con un 
 * valor default.
 * Me tiene que permitir agregar tareas,
 * editar y eliminar. Además debería poder listar
 * las tareas permitiendome filtrar por
 * si fueron resueltas o no, pero sin ser obligatorio.
 * Por cada funcion que haga, primero empiezo por 
 * el test, y luego por la funcion.
 * Observaciones: Pensar en ejercicio integrador de 
 * cargar personas.
 */


 let todoList = [];

 const addTodo = (title, description, status = false) => {
    todoList.push([title, description, status]);
 };

beforeEach(() => {
  todoList = [];
});

 test('Carga tarea correctamente usando valor default', () => {
  addTodo("Mi nueva Tarea", "Cosas que debo hacer.");
  expect(todoList[0]).toStrictEqual([
    "Mi nueva Tarea",
    "Cosas que debo hacer.",
    false
  ]);
 });

 test('Carga tarea correctamente usando valor default', () => {
  addTodo("Mi nueva Tarea",
          "Cosas que debo hacer.", 
          true);
  expect(todoList[0]).toStrictEqual([
    "Mi nueva Tarea",
    "Cosas que debo hacer.",
    true
  ]);
 });


 // modificar

 const modifyTodo = (title, newTitle, newDesc) => {
    for (let todo of todoList) {
      if(todo[0] == title) {
        todo[0] = newTitle;
        todo[1] = newDesc;
      }
    }
 }

 test('modifico titulo y descripcion', () =>{
  addTodo("Titulo", "Descripcion"); 
  modifyTodo("Titulo", "Nuevo Titulo", "Nueva Descripcion");
  expect(todoList[0][0]).toBe("Nuevo Titulo");
  expect(todoList[0][1]).toBe("Nueva Descripcion");
 });

// eliminar
const deleteTodo = (title) => {
  let index = todoList.findIndex((todo) => {
    return todo[0] == title;
  });
  if(index == -1) {
    throw "El titulo no existe";
  }
  todoList.splice(index, 1);
};

test('eliminar elemento de la lista', () => {
  addTodo("Titulo 1", "Desc 1", true);
  addTodo("Titulo 2", "Desc 2", false);
  deleteTodo("Titulo 1");
  expect(todoList).toHaveLength(1);
  expect(todoList[0][0]).toBe("Titulo 2");
});
test('intenta eliminar pero recibe throw', () => {
  expect(()=>{
    deleteTodo("titulo fake")
  }).toThrow("El titulo no existe");
});

const listTodos = (status = undefined) =>{
  if(status == undefined) {
    return todoList;
  }

  return todoList.filter((todo)=>{
    return todo[2] == status;
  });
};

// listar y filtrar
test("filtra y no filtra", () => {
  addTodo("Titulo 1", "Desc 1", false);
  addTodo("Titulo 2", "Desc 2", false);
  addTodo("Titulo 3", "Desc 3", false);
  addTodo("Titulo 4", "Desc 4", false);
  addTodo("Titulo 5", "Desc 5", true);
  addTodo("Titulo 6", "Desc 6", true);
  addTodo("Titulo 7", "Desc 7", true);

  let filtroPorFalse = listTodos(false);
  let filtroPorTrue = listTodos(true);
  let noFiltro = listTodos();
  expect(filtroPorFalse).toHaveLength(4);
  expect(filtroPorTrue).toHaveLength(3);
  expect(noFiltro).toHaveLength(7);
  expect(filtroPorFalse[0][0]).toBe("Titulo 1");
  expect(filtroPorTrue[0][0]).toBe("Titulo 5");
  expect(noFiltro[0][0]).toBe("Titulo 1");
  expect(noFiltro[6][0]).toBe("Titulo 7");
});