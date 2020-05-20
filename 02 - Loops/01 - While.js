/**
 * Existe una estructura de repetición que se llama while y se ejecuta mientras la condición 
 * sea verdadera. En español podemos pensar esta estructura como 
 * MIENTRAS condición HACER tal cosa
*/
while (condicion) {
    console.log('Imprimo este mensaje mientras la condición sea verdadera');
}
/**
 * Vamos a refactorizar el código que muestra números del 0 al 9 utilizando la estructura while
 */
let numero = 0;

while (numero < 10) {
  console.log(numero);
  numero++; // numero = numero + 1  // numero += 1 // le suman 1 a numerogit
}
/**
 * Con tan solo un par de lineas de código podemos mostrar todos los números 
 * del 0 al 10 y si queremos mostrar más tan solo hacemos un cambio
 */
let numero = 0;

while (numero < 10000) {
  console.log('número: ', numero);
  numero++;
}

/**
 * Vemos que de esta forma las estructura de repetición nos hacen la 
 * vida mucho más fácil y controlable.
 * Un tema que tenemos que tener en cuenta es que al utilizar las estructuras de
 * repetición podemos caer en lo que se denomina un loop infinito: 
 * un código que se va a repetir por siempre ya que la condición no cambia. 
 * Esto puede colgar un servidor o el ambiente donde estemos ejecutando esta repetición. 
 * IMPORTANTE: recordar cambiar la condicón en algún momento.
 */
while (true) {
    console.log('colgamos esta rutina');
}

let numero = 0;

while (numero < 10000) {
    console.log('número: ', numero);
}
/**
 * En cualquiera de estos ejemplos podemos colgar todo ya que en ningún 
 * momento se modifica la condición y siempre va a ser verdadera.
 * Otra de las características que tiene el while es que si la condición es negativa no se ejecuta
 */
while(false) {
    console.log("Esto jamás se va a ejecutar");
}
console.log("Ejecuta unicamente este console.log");