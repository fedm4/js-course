// Arrays
/*Otro de los tipos que tenemos en ECMASCript es el array
Este tipo de dato nos permite guardar múltiples valores en una sola variable
Podemos ver este tipo de datos como una colección
La forma de crear un array es utilizando los corchetes y separar los valores utilzando comas
Ejemplo:
*/
['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

/*En este caso tenemos un array que tiene 4 elementos que parecen ser personas
Ejemplo:
*/
var playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];

// otra forma de escribir esto puede ser:
var playlist = [
  'Smells Like Teen Spirit',
  'Come As You Are',
  'Heart-Shaped Box',
  'Lithium'
];
/*También podemos crear un array vacío ya que no siempre sabemos que elementos va a tener
Ejemplo:
*/
var playlist = [];
/*Un array puede guardar cualquier tipo de dato
Ejemplo:
*/
var datos = [
  'Ada',
  42,
  true,
  null,
  function() { console.log('¡hola!') }
];
/**
 * Para obtener los datos de un array podemos utilizar el índice
 * Los índices en ECMAScript comienzan en 0
 * Es decir que el primer item lo podemos obtener con el índice 0
 * Ejemplo: 
 * */

var datos = [
  'Ada',
  42,
  true,
  null,
  function() { console.log('¡hola!') }
];

var nombre = datos[0];
var edad = datos[1];
var esProgramadora = datos[2];
var miVariable = datos[3];
var saludar = datos[4];

console.log(nombre);
console.log(edad);
console.log('programadora?:', esProgramadora);
console.log(miVariable);

// Acá se viene el gran momento de tu vida:
saludar(); // muestra en consola hola
/**
 * En este ejemplo vemos que podemos acceder a los distintos elementos de un array utilizando un índice numérico
 * Podemos almacenar todos los datos en otras variables
 * En el caso de la función estamos simplemente asignando una función a la variable saludar como cualquier otro valor (ECMAScript nos deja hacer esto) y luego ejecutamos esta función
 * 
 * También podemos asignar un valor a una posición de un array utilizando el índice
 * Ejemplo:
 */
var peliculas = ["Superman", "Batman Begins", "The Dark Knight", "Man of Steel", "The Batman"];

peliculas[0] = 'Batman';
peliculas[3] = 'The Dark Knight Rises';

console.log(peliculas);
// [ 'Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises', 'The Batman' ]
/*Tenemos que tener cuidado al asignar un item de un array
Ejemplo:*/

var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
peliculas[8] = 'The Batman';
console.log(peliculas);
// ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises', , , , , 'The Batman']
/*ECMAScript al manejar la memoria de forma dinámica asigna espacios vacíos en las posiciones donde no existen valores*/

var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
peliculas[4] = 'Batman: The Killing Joke';
peliculas[5] = 'Batman: The Dark Knight Returns, Part 1';
peliculas[6] = 'Batman: The Dark Knight Returns, Part 2';
peliculas[7] = 'LEGO Batman';
peliculas[8] = 'The Batman';
console.log(peliculas);
/*
[
  'Batman',
  'Batman Begins',
  'The Dark Knight',
  'The Dark Knight Rises',
  'Batman: The Killing Joke',
  'Batman: The Dark Knight Returns, Part 1',
  'Batman: The Dark Knight Returns, Part 2',
  'LEGO Batman',
  'The Batman'
]
*/
// En este caso completamos los datos que nos faltaban utilizando índices

// length 
/**
 * Por medio de la propiedad length podemos obtener la cantidad de elementos que tiene un array
 * Funciona de la misma forma que la propiedad length de los strings
 * Ejemplo:
 */

var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
console.log(peliculas.length); // 4
/** 
 * Podemos utilizar esta propiedad para obtener el último elemento de un array
 * Si a la longitud de un array le restamos 1 obtenemos el último índice del último elemento
 * Ejemplo:
 */
var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
var cantidadDePeliculas = peliculas.length;
var ultimoIndice = cantidadDePeliculas - 1;
console.log(peliculas[ultimoIndice]); // The Dark Knight Rises

//Otra forma de escribir esto es: Ejemplo:
var peliculas = ['Batman', 'Batman Begins', 'The Dark Knight', 'The Dark Knight Rises'];
console.log(peliculas[ peliculas.length - 1 ]); // The Dark Knight Rises
//Vemos que podemos utilizar la propiedad length - 1 para obtener el último índice y luego obtener el último elemento



/**
 * Recorrer un array
 * La mayoría de las veces, los ciclos for son usados para recorrer/iterar sobre cada uno de los elementos de un array.
 * Usando el acceso a los datos de un array mediante el índice, vamos a poder acceder a cada elemento.\
 * Para hacer este recorrido, vamos a utilizar la propiedad length
 * Ejemplo:
 */

var villanosDeBatman = ['Joker', 'Bane', "Ra's Al Ghul", 'Scarecrow'];
for (var i = 0; i < villanosDeBatman.length; i++) {
  console.log(villanosDeBatman[i]);
}

// Joker
// Bane
// Ra's Al Ghul
// Scarecrow
/**
 * Recordemos que los índices de los arrays comienza en 0, por eso inicializamos i = 0
 * Esto quiere decir que el último elemento de un array siempre va a ser su longitud - 1
 * La condición que pusimos en el for es i < villanosDeBatman.length, con la cual estamos haciendo 
 * que la última vuelta sea cuando i es la longitud - 1
 * Si tenemos un array con 3 elementos, significa que el primer indice es 0 y el último 2 (length - 1). Entonces, con un for iteramos desde i = 0 hasta i < 3
 * Ejemplo:
 */

var numeros = [8, 2, 5];
for (var i = 0; i < numeros.length; i++) {
  // en la primer vuelta del for i tiene el valor 0
  // en la segunda vuelta del for i tiene el valor 1
  // en la tercer vuelta del for i tiene el valor 2
  console.log(numeros[i]);
}

// cuando el for quiere hacer una cuarta vuelta, como i tiene valor 3 ya no es menor a la longitud
// (porque queda 3 < 3, y es falso) entonces deja de ejecutarse

// 8
// 2
// 5
/**
 * Si necesitamos recorrer el array en orden inverso, tenemos que usar un for de la misma forma 
 * que antes solo que cambiando el valor inicial de i y la condición
 * En este caso, el primer elemento que queremos mostrar va a ser el que está en la última posición length - 1
 * Ejemplos:
 */

var villanosDeBatman = ['Joker', 'Bane', "Ra's Al Ghul", 'Scarecrow'];
// en este caso estamos diciendo que vaya desde i = 3 (length - 1)
// y en la condicion decimos que siga dando vueltas siempre que i se mayor o igual a 0
// usamos el igual porque queremos y necesitamos que llegue a 0, ya que seria el elemento que esta en la primer posición
for (var i = villanosDeBatman.length - 1; i >= 0; i--) {
  // en la primer vuelta del for i tiene el valor 2
  // en la segunda vuelta del for i tiene el valor 1
  // en la tercer vuelta del for i tiene el valor 0
  console.log(villanosDeBatman[i]);
}

// cuando el for quiere hacer una cuarta vuelta, como i ya tiene el valor -1 (y la condición queda -1 >= 0, y es falso) entonces deja de ejecutarse

// Scarecrow
// Ra's Al Ghul
// Bane
// Joker
/**
 * En este ejemplo, en el for, lo que hicimos fue:
 * Inicializar i en length - 1 (que sería el último índice posible)
 * Dar vueltas siempre que se cumpla que i sea mayor o igual a 0. Acá es importante ver que necesitamos 
 * que i sea 0, ya que es el primer índice del array
 * En el tercer componente del for, en lugar de incrementar i, lo estamos decrementando
 */