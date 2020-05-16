/**
 * Otra de las estructuras de repetición que podemos encontrar es el do/while. 
 * En español podemos leer esta estructura como HACER MIENTRAS.
 * La diferencia que tiene esta estructura con el while es que siempre se 
 * ejecuta al menos una vez y luego pregunta por la condición.
 */

do {
// esto se ejecuta al menos una vez
} while (condicion);

/**
 * Podemos ver que se ejecuta una vez al menos, a pesar de que la condición
 * sea false, dado que la condición se chequea LUEGO de ejecutar el bloque "do"
 */
let numero = 1000;
do {
    console.log('número: ', numero);
    numero++;
} while (numero < 1000);

/**
 * Comparativamente, en un while, no existe esta posibilidad, porque se chequea
 * primero la condición y luego se ejecuta el bloque
 */

let numero = 1000;
while(numero < 1000) {
    console.log(`número: ${numero}`);
}
