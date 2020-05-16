/**
 * Async / Await es la nueva forma de Javascript
 * de ejecutar promesas de forma estructurada.
 * Esto significa que en lugar de ejecutar .then y .catch
 * por cada promesa, con callbacks, y esperar que se resuelvan 
 * mas adelante, puedo llamar a la funcion y esperar en esa misma
 * linea hasta que haya una devolucion.
 * 
 */

 // promesas / ejecuta el codigo y sigue 
const promiseFetch = () =>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(res => console.log(res))
        .catch(err => console.log(err));
    console.log("Termino fetch promise");
}

const asyncAwaitFetch = async (param1, param2) => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log(res);
    } catch (err) {
        console.log(err);
    }
    console.log("Termino fetch async/await")
}

/**
 * Como podemos observar, en el primer caso, ejecuta el fetch, y lo primero que muestra
 * la consola es "Termino fetch promise", porque ya lo ejecute, lo que ejecutara
 * el callback lo ejecutara mas adelante cuando se resuelva esa promesa.
 * 
 * Por otro lado, en el otro caso, se imprime primero la respuesta del fetch, 
 * y luego se imprime Termino fetch async/await. Esto es porque al decirle
 * "await fetch()" le estamos diciendo "Espera a que vuelva esta informacion
 * para seguir ejecutando el programa."
 * 
 * Tambien podemos observar que en lugar de .catch estamos usando try/catch
 * para agarrar aquellos errores que puedan surgir de este codigo. Como se puede
 * ver hasta incluso es codigo mas legible y practico a la hora de entenderlo.  
 */



 console.log("hola"); //
 asyncAwaitFetch();
 console.log("chau");