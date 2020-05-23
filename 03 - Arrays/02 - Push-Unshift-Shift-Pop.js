// Push
/**
 * El método push permite agregar uno o más elementos al final de un array
 * Retorna la nueva longitud que tiene el array
 * Podes leer más sobre push en el sitio del MDN
 * Ejemplo:
 */

let techsFrontend = ['react', 'vue', 'angular'];
let cantidadDeTechs = techsFrontend.push('backbone');

console.log(techsFrontend);
// [ 'react', 'vue', 'angular', 'backbone' ]
console.log(cantidadDeTechs); // 4

cantidadDeTechs = techsFrontend.push('ember', 'polymer');

console.log(techsFrontend);
// [ 'react', 'vue', 'angular', 'backbone', 'ember', 'polymer' ]
console.log(cantidadDeTechs); // 6

/**
 * En este ejemplo vemos varias cosas interesantes
 * Por un lado con el método push podemos agregar un elemento a un array como en el caso de backbone o varios como en el caso de ember y polymer
 * Estamos modificando el array original techsFrontend, es decir que estamos mutando su valor
 */
 
/**
 * Unshift
 * El método unshift agrega uno o más elementos al inicio de un array
 * Retorna la nueva longitud que tiene el array
 * Podes leer más sobre unshift en el sitio del MDN
 * Ejemplo:
 */

let techsFrontend = ['react', 'vue', 'angular'];
let cantidadDeTechs = techsFrontend.unshift('backbone');

console.log(techsFrontend);
// [ 'backbone', 'react', 'vue', 'angular' ]
console.log(cantidadDeTechs); // 4

cantidadDeTechs = techsFrontend.unshift('ember', 'polymer');

console.log(techsFrontend);
// [ 'ember', 'polymer', 'backbone', 'react', 'vue', 'angular' ]
console.log(cantidadDeTechs); // 6
//Podemos decir que funciona como push pero en lugar de insertar los elementos al final lo hace al principio

/**
 * Shift 
 * El método shift elimina el primer elemento de un array
 * Retorna el elemento eliminado
 * Este método modifica la propiedad length del array
 * Podes leer más sobre shift en el sitio del MDN
 * Ejemplo:
 */
let techsFrontend = ['react', 'vue', 'angular'];
let react = techsFrontend.shift();
console.log(techsFrontend);
// ['vue', 'angular']
console.log(techsFrontend.length);
// 2

let vue = techsFrontend.shift();
console.log(techsFrontend);
// ['angular']
console.log(techsFrontend.length);
// 1

let angular = techsFrontend.shift();
console.log(techsFrontend);
// []
console.log(techsFrontend.length);
// 0

console.log(react); // react
console.log(vue); // vue
console.log(angular); // angular
/**
 * Podemos ver como utilizando el método shift podemos obtener el primer elemento y eliminarlo del array
 * Al sacar un elemento se modifica la propiedad length del array
 */

/**
 * Pop
 * El método pop elimina el último elemento de un array
 * Retorna el elemento eliminado
 * Este método modifica la propiedad length del array
 * Podes leer más sobre pop en el sitio del MDN
 * Ejemplo:
 */
let techsFrontend = ['react', 'vue', 'angular'];
let angular = techsFrontend.pop();
console.log(techsFrontend);
// ['react', 'vue']
console.log(techsFrontend.length);
// 2

let vue = techsFrontend.pop();
console.log(techsFrontend);
// ['react']
console.log(techsFrontend.length);
// 1

let react = techsFrontend.pop();
console.log(techsFrontend);
// []
console.log(techsFrontend.length);
// 0

console.log(angular); // angular
console.log(vue); // vue
console.log(react); // react
// Vemos que el método pop funciona de manera similar que shift
