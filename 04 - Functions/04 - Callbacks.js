/**
 * Muchas veces tenemos funciones que reciben por parametro
 * otra funcion
 * 
 */

 const miFuncion1 = callback => {
    miFuncion2();
 };

 const miFunction2 = callback => console.log("Estoy en funcion 2");

 miFuncion1();

 /**
  * Estas funciones que se pasan por parametro se llaman Callbacks
  * Los callbacks me sirven para ejecutar una funcion en un funcion
  * pre armada, por ejemplo, las funciones de los arrays 
  * forEach, map, reduce, filter, find, findIndex
  * Todas funcionan parecido, excepto reduce  
  */
 // Foreach hace un loop por cada elemento del array, devolviendome 
 // el item de cada iteracion.
 // Paso un callback que a su vez recibe por parametro el item del array
 // y el indice que le corresponde.
 forEach((item, index) => {
    console.log(item, index); // hago algo con este codigo.
 });

 // Para representar la funcion forEach,
 // podriamos pensar que hace algo como esto
 // NO es exactamente asi, solo es para representarlo
 const forEach = callback => {
    for(let i = 0; i < Array.length; i++) {
        callback(Array[i], i); // llamo a mi callback que declare en el foreach, y le paso el item y el index
    }
 };

 // map, filter, find y findIndex funcionan exactamente igual
 // con el agregado de que devuelven informacion
 // map transforma el array y me devuelve un array con la misma cantidad de elementos
 // que el original
 const nuevoArr = [1,2,3].map(item => item + 1);
 console.log(nuevoArr)// [2,3,4]
 