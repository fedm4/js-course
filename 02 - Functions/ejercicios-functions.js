// Funciones solas.
//1.
/***********************************************
 * 
 * 1. Hacer una funcion llamada "saludo"
 * 2. Cada vez llamo la funcion me 
 *    pide un nombre
 * 3. Toma ese nombre y me dice 
 *    "Hola <nombre>" en un alert. 
 * 
 ***********************************************/

const saludo = () => {
    let nombre = prompt("Decime tu nombre:");
    alert(`Hola ${nombre}`);
};

 //2.
 /***********************************************
 *
 * Hacer una funcion para elevar un 
 * número al cuadrado, pidiendo el valor
 * por prompt y mostrnadolo por alert.
 * 
 ***********************************************/

const elevarAlCuadrado = () => {
    let numero = prompt("Decime un numero");
    //console.log(numero * numero);
    console.log(Math.pow(numero, 2));
};

 //3.
 /***********************************************
 *
 * 1. Crear un array vacío
 * 2. Hacer una funcion para llenar
 *    el array, pidiendo por prompt. Cada vez
 *    que invoco la función, me muestra UN prompt y
 *    lo carga en el array.
 * 3. Hacer una función que muestre en un alert
 *    el último valor agregado al array.
 * 4. Hacer una función para imprimir la lista
 *    de valores del array en un console.log.
 * 
 ************************************************/

 const miArray = [];

 const cargarArray = () => {
    let dato = prompt("Decime algo");
    miArray.push(dato);
 };

 const mostrarLista = () => {
    console.log(miArray);
 };

 const mostrarUltimo = () => {
    console.log(    miArray[miArray.length - 1]);
 };