/**
 * Al momento de obtener datos para trabajar con nuestro sistema, vamos a
 * tener que acceder a alguna fuente de informacion, o sea, un backend o una 
 * base de datos. Para lograr esto tenemos varias herramientas que cumplen todas
 * la misma funcion. Fetch. Obtener.
 * 
 */
fetch(...).then(...).catch();
let data = {
    method: 'POST', // *GET, POST, PUT, DELETE
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({employeeId: 1, name: "Fede"}) // body data type must match "Content-Type" header
};

fetch("https://mirecursoonline.com/bla", data)
    .then( response => {
        if(response.code !== 200) {
            throw "error";
        }
        // parse y return response
        return JSON.parse(response.data);
    }).catch( err => {
        console.log(err); // Catch error como en try/catch
    });
console.log("hola");


fetch("pedir menu", {method: "GET"})
    .then(menu =>{
        let comidaElegida = elegirMorfi(menu);
        return comidaElegida;
    })
    .then(comidaQueElegi => {
        fetch(`pedir/${comidaQueElegi}`, {method: "GET"})
            .then( bandeja => {
                if(bandeja.status === "llena") {
                    comerComida(bandeja.comida);
                }
            })
            .catch(error =>{
                "hubo un error con tu comida"
            });
            servirCocucha();      
    })
    .catch();

ponerCubiertos();


fetch("crear en menu", {
    method: "POST",
    body: {plato: "milanesa", guarnicion: "papas fritas"}
}).then(response => {
    if(response.status !== 200) {
        throw "Hubo un error creando milanesa";
    }
    console.log(response.data) // { plato: "milanesa", guarnicion: "papas fritas"};
})

// hola
// chau
/**
 * Tenemos la api de Fetch, un standard que viene en todos los browsers, y como podemos
 * observar en el ejemplo anterior, estamos encadenando .then y .catch en nuestra ejecución
 * 
 * Esto es porque tenemos algo llamado promesas. 
 * Las promesas son datos que devuelve una función, en este caso "fetch". Esta promesa devuelta
 * no tiene ningún dato real de lo que esperamos, simplemente nos dice "te prometo que voy a
 * devolverte algo", y en cuanto lo hace, usando la función "then" podemos tomar esa data, que 
 * nos llega por parámetro, y ejecutar algo con la misma.
 * De la misma forma encadenamos un "catch", porque puede suceder que haya un error, y en lugar de
 * frenar la ejecución de nuestro programa, queremos hacer algo para que la UX sea mejor, y no 
 * se muestre un error por consola y nada más.
 */

 /**
  * La API fetch se puede usar, pero también podemos usar librerías que nos faciliten esto.
  * Por ejemplo AXIOS.
  */
 <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

 axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

/**
 * De esta forma obtenemos la data que queremos desde el servidor remoto.
 * Tambien tenemos los métodos axios.post, axios.put y axios.delete
 * para referenciar los diferentes métodos que queremos enviar.
 * Tanto post como put requieren  cierta información, porque me sirven
 * para crear algo nuevo o modificar algo existente. 
 */

 // creacion
 axios.post('https://jsonplaceholder.typicode.com/posts', {
     title: " NUEVO TITULO",
     body: "Nuevo cuerpo",
     userId: 1
 }).then(res => console.log(res.data))
.catch(err => {throw err;});

// update
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: " NUEVO TITULO",
    body: "Nuevo cuerpo",
    userId: 1
}).then(res => console.log(res))
    .catch(err => {throw err;});
   

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => console.log(res.data))
    .catch(err => {throw err;});
   



/**
 * A la hora de usar axios desde consola, podemos buscar el paquete con npm o yarn
 */
npm install --save axios
// o
yarn add axios

/**
 * La utilización sigue siendo igual.
 */


 /**
  * Sobre APIs REST
  * 
  * Las apis rest suelen ser la forma más común de comunicación
  * entre un frontend y un backend.
  * Estas, a pesar de estar hechas por programadores, no 
  * quedan libradas a la decisión. Hay una serie de patrones
  * que se suelen seguir para desarrollarlas.
  * 
  * Métodos de comunicación
  *     Los métodos pueden ser GET, POST, PUT, y DELETE.
  * Concretamente:
  * GET: Estoy diciendo que voy a buscar información en el recurso (API)
  * POST: Estoy diciendo que voy a insertar algo nuevo en el recurso
  * PUT: Estoy diciendo que voy a modificar algo existente en el recurso
  * DELETE: Estoy diciendo que voy a eliminar algo existente en el recurso
  * 
  * Para comprender como funcionan, podriamos decir que las URLs son lo que 
  * definen sobre qué vamos a actuar, y los métodos (o acciones), son lo que 
  * definen QUE vamos a hacer con ello.
  * Entonces, si quisiera pedir una lista de empleados de un recurso,
  * posiblemente debería pedirlo haciendo un GET a 
  * https://recurso.falso/employees
  * 
  * Ahora, si quisiera pedir un empleado, seguramente tendría que tener
  * un ID y hacer un GET en 
  * https://recurso.false/employee/1
  * 
  * A la misma URL podria pedirle un DELETE para eliminarla, o un 
  * PUT para modificarla, dado que ya tengo el ID del empleado
  * que quiero eliminar.
  * 
  * Ahora, por ultimo, para insertar un nuevo empleado
  * simplemente deberia hacer un POST a
  * https://recurso.false/employee
  * 
  * De esta forma voy a encontrar muy facilmente como funcionan las APIs rest
  * de una forma mas o menos estandar.
  * 
  * 
  */