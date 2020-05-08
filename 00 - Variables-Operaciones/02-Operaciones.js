/****************************************************
 * Podemos hacer funciones matemáticas programando. *
 ****************************************************/
const resultadoSuma  = 1 + 2; // 3
const resultadoResta = 5 - 2; // 3 
const resultadoMulti = 1 * 3; // 3
const resultadoDivi  = 6 / 2; // 3 

/**
 * Podemos, por otro lado, hacer Modulo. 
 * El módulo es el RESTO que queda de una división.
 * Es decir, si hago 
 */
console.log(5 % 2); // 1 - porque 5/2 = 2 y sobra 1.
console.log(8 % 4); // 0 - porque 8 / 4 = 2 y no sobra nada.

/**
 * También podemos hacer cuentas más complejas, dependiendo lo que 
 * necesitemos.
 */
console.log(5 + (3 * (16 - 4))); // 41 - Utilizo los paréntesis para explicitar que cuentas se hacen por separado.
console.log(5 + (3 * 16 - 4));  // 49 - Al no tener el parentesis alrededor de 16-4, es una cuenta diferente.