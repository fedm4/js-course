/**
 * Al momento de obtener datos para trabajar con nuestro sistema, vamos a
 * tener que acceder a alguna fuente de informacion, o sea, un backend o una 
 * base de datos. Para lograr esto tenemos varias herramientas que cumplen todas
 * la misma funcion. Fetch. Obtener.
 * 
 */

fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
}).then( res => {
    // parse y return response
    return JSON.parse(res);
}).catch( err =>{
    console.log(err); // Catch error como en try/catch
});

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
}).then(res => console.log(res.data))
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


 