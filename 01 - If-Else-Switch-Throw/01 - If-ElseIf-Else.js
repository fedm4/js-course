/**
 * Estructuras de control
 * Las estructuras de control son formas de controlar
 * el flujo de los datos en nuestra aplicación.
 * Puedo decidir, en base al valor de una variable, por ejemplo,
 * si modifico esa misma variable.
 */

 let miVar = true;
 if(miVar === true) {
     miVar = false;
 }

 /**
  * Notar que estoy usando === (tres =) para COMPARAR una variable (izquierda)
  * con un valor (derecha)
  * Estos son "Operadores de comparación" y nos van a devolver siempre
  * un valor booleano (true o false)
  * Los operadores son 
  * === comparo si los valores son iguales
  * !== comparo si los valores son diferentes
  * > comparo si un valor (izquierda) es mayor a otro (derecha)  - valor1 >  valor2
  * < comparo si un valor (izquierda) es menor a otro (derecha) - valor1 < valor2
  * >= comparo si es mayor o igual
  * <= comparo si es menor o igual
  */
console.log(1 === 1); // true
console.log(1 === 2); // false 
console.log(1 !== 2); // true
console.log(1 !== 1); // false

console.log(1 > 2); // false
console.log(1 > 0); // true
console.log(1 > 1); // false

console.log(1 >= 2); // false
console.log(1 >= 0); // true
console.log(1 >= 1); // true

console.log(1 < 2); // true
console.log(1 < 0); // false
console.log(1 < 1); // false

console.log(1 <= 2); // true
console.log(1 <= 0); // false
console.log(1 <= 1); // true

if(1 === 1) {
    console.log("Esto va a ejecutar");
}
if(1 === 2) {
    console.log("Esto no va a ejecutar");
}

/**
 * Puedo, además encadenar diferentes comparaciones, utilizando dos operadores
 * && - and (y)
 * || - or (o)
 */
 
 if(1 === 1 && 2 !== 1) { // Entra si la primera condición Y la segunda condición, son ambas true
     console.log("Esta condición me permite entrar");
 }
 if(1 === 2 || 2 !== 1) {
    console.log("Esta condición me permite entrar");
 }

 /**
  * Las condiciones, ejemplificadas con números, dan resultados que siempre
  * van a ser iguales. Nosotros vamos a estar usando variables para comparar
  * dado que las variables van a guardar aquello que los usuarios pueden 
  * modificar. Es lo que va a generar que nuestra aplicación no corra
  * siempre igual
  */

const nombre = prompt("Digame su nombre");

if(nombre === "") { // Comparo la variable con un string vacío.
    alert("Por favor, digame su nombre");
}
if(nombre === "Fede") {
    alert("Por favor, retírese sin hacer escándalo.");
}
if(nombre !== "Fede" && nombre !== "") { // Compruebo que la variable no sea Fede ni un string vacío. 
    alert("Bienvenide!");
}

/**
 * Este código que vemos aquí puede mejorarse muchísimo utilizando dos cosas más
 * else y else if. Comencemos con el else.
 */
const nombre = prompt("Digame su nombre");

if(nombre === "") {
    alert("Por favor, digame su nombre");
} else {
    alert("Bienvenide!");
}

/**
 * Si la condición NO se cumplió, se ejecuta el bloque "else".
 * 
 * Por último podemos agregar condiciones encadenadas, que se vayan
 * leyendo una por una, hasta que alguna de ellas se cumpla.
 * Esto es "else if"
 */
let nombre = prompt("Digame su nombre");

if(nombre === "") { // Si se cumple, entra y no se ejecuta ningún else o else if. Si no se cumple, pasa al else if
    alert("Por favor, digame su nombre");
} else if(nombre === "Fede") { // Si se cumple, entra y no se ejecuta el else. Si no se cumple, se ejecuta el else.
    alert("Por favor, retírese sin hacer escándalo.");
} else { // Se ejecuta si ninguna condición anterior se cumplió.
    alert("Bienvenide!");
}

/**
 * Puedo encadenar todos los else if que necesite. Puede ser uno, como 10, 100, o 1000.
 * Claro que nunca tiene sentido tener ni 1000, ni 100, o incluso 10, suelen ser como mucho 3 o 4.
 * pero los límites los ponemos nosotros diseñando mejor nuestro algoritmo.
 */
/**
 * Por último vamos a hablar de ifs anidados.
 * Podemos "anidar", meter ifs dentro de otros ifs.
 * Esto nos permite generar otro tipo de algoritmo, con resultados distintos.
 * En el caso de ejemplo, vemos como SOLO muestro mensaje si las condiciones
 * de string vacío y nombre "Fede" no se cumplen. 
 * Estoy ahorrandome el "else" PERO a cambio estoy perdiendo los mensajes
 * específicos para cada caso. Esto siempre va a depender de lo que nosotros
 * querramos hacer, de nuestro diseño.
 */
if(nombre !== "") {
    if(nombre !== "Fede") {
        alert("Bienvenide!");
    }
}

/**
 * Aclaraciones sobre comparadores.
 * Tenemos dos tipos de comparadores, comparadores comunes, y comparadores estrictos.
 * Nosotros, hasta ahora, solo vimos comparadores estrictos. Es decir, comparadores
 * que comparan valor Y tipo de dato.
 */
console.log(1 === 1) // true - mismo tipo de dato, mismo valor.
console.log(1 === "1"); // false - diferente tipo de dato, mismo valor.

/**
 * Los comparadores comunes, por otro lado, solo comparan el valor.
 * Es decir, el tipo de dato puede variar, pero el valor debe ser el mismo.
 */
console.log(1 == 1); // true - mismo tipo de dato, mismo valor
console.log(1 == "1"); // true - diferente tipo de dato, mismo valor.
console.log(1 == 2) // false - mismo tipo de dato, diferente valor.

/**
 * Estos comparadores estrictos SOLO son === y !==, comparables a == y !==
 */

 /**
  * Por otro lado podemos simplemente corroborar si un valor es "truthy" (tiene un valor verdadero)
  * o falsy (tiene un valor falso).
  */
 // algunos valores truthy son:
 if(1) {} // truthy 
 if(true){} // truthy
 if("un texto"){} // truthy

 // la lista de valores falsy es:
 if(0) {}// falsy
 if(false) {}// falsy
 if("") {}// falsy
 if(null) {}// falsy
 if(undefined) {} // falsy

 /**
  * Tenemos una forma de simplificar los if
  * Esta forma es el operador ternario.
  * Yo hago una pregunta y depende de su respuesta, devuelvo
  * un resultado u otro.
  */
  const miText = miVariable ? 'Texto si es true' : 'Texto si es false';
  
  // Desglosando esto es:
  const miText = // Aqui estoy creando una constante donde voy a guardar mi data condicional
  miVariable ? // Literalmente estoy preguntando si miVariable es true o false. Esta es la condición del if
  'Texto si es true' // El operador ternario "Devuelve" (como un mixin de sass, por ejemplo), este texto, si la condición fue true
  : // Con esto separo el valor que devuelvo si es true, del valor que devuelvo si es false
  'Texto si es false' // El operador ternario devuelve este texto si la condición fue false. 