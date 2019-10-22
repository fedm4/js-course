/******************************************
 * 
 * FUNCIONES
 * 
 * Las funciones son un bloque de código que
 * realizan una acción específica.
 * Una función de javascript es ejecutada
 * cuando algo la "invoca".
 * Estas funciones, se pueden asignar a 
 * variables/constantes para poder
 * posteriormente invocarlas, o bien, 
 * se pueden usar funciones con nombre.
 * 
 * Las funciones se utilizan para distintos
 * tipos de tareas. La idea es que el código
 * sea reutilizable.
 * 
 * Funciones flechas y variables.
 * ej:
 * const myFunction = () => {
 *  // código a ejecutar
 * }
 * 
 * myFunction();
 * 
 * 
 * Las funciones pueden ser funciones con nombre,
 * utilizando la sintaxis vieja de javascript
 * 
 * ej: 
 * function myFunction(){
 *   // codigo a ejecutar
 * }
 * 
 ******************************************/
let a = 1;
const sumar = () => {
    a += 2;
};
console.log(a); // 1
sumar();
console.log(a); // 3
// La funcion anterior es igual a
function sumar(){
    a += 2;
}
// O igual a 
const sumar = function(){
    a += 2;
};



try {
    a();
} catch(err){
    console.warn(err);
}
try {
    b();
} catch(err){
    console.warn(err);
}
try {
    c();
} catch(err){
    console.warn(err);
}
const a = () => {
    console.log('A');
};
function b() {
    console.log('B');
}
const c = function(){
    console.log('C');
}

try {
    a();
} catch(err){
    console.warn(err);
}
try {
    b();
} catch(err){
    console.warn(err);
}
try {
    c();
} catch(err){
    console.warn(err);
}

