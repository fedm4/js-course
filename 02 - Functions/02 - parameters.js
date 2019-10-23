alert("Hola soy un alert");
let a = 1;
let b = a;
a // 1
b // 1
b = 2 
a // 1
b // 2
///////////////
let a = [1,2];
let b = a;
a // [1, 2]
b // [1, 2]
b[1] = 3
a // [1,3]
b // [1,3]
/*****************************************
 * 
 * PARAMETROS
 * 
 * Los parametros de las funciones son 
 * valores que se le pasan a la funcion,
 * y que fueron previamente definidos en 
 * la declaración de la misma.
 * Ej:
 * let myFunction = (param1, param2) => {
 *      // código a ejecutar
 * };
 * 
 * myFunction("valor1", "valor2");
 * 
 * Estos parámetros van a vivir únicamente
 * dentro de la función; es decir, si modifico
 * su valor, este no va a afectar a la variable
 * original. Esto sucede para todos los tipos de
 * variables exceptuando arrays y objetos (que se 
 * verán más adelante). Esto sucede porque los 
 * arrays y objetos son pasados por referencia.
 * 
 * Existe la posibilidad de pasar parámetros con
 * valores por default, en caso de que no se llamen
 * con ese parametro.
 * Ej:
 * let myFunc = (param1, param2 = "mi valor") => { /* Code * / };
 * 
 * Como se ve en el ejemplo, el segundo parámetro
 * tiene un valor asignado, que va a ser usado en caso
 * de llamar a la funcion sin ese parámetro.
 * Ej:
 * myFunction("valor1"); //param1 va a tener el 
 *                       // valor "valor1"
 *                       //param2 va a tener el 
 *                       //valor "mi valor"
 * 
 * myFunction("valor1", "2"); //param1 va a tener
 *                              // el valor "valor1"
 *                          //param2 va a tener el
 *                          // valor "2"
 * 
 * También se pueden enviar funciones como parámetros.
 * De la misma forma que declaramos funciones en variables
 * y las invocamos, podemos hacer esto con los parámetros
 * de nuestra función.
 * Ej:
 * const miFuncion1 = () => { console.log(1); };
 * const miFuncion2 = (callback) => { callback(); };
 * miFuncion2(miFuncion1);
 * // También puedo declarar la función directamente
 * // en la invocación.
 * const myFunction = (callback) => { callback(); };
 * miFuncion2(() => { 
 *      console.log("Mi función declarada en invocación") 
 * });
 *  
 * 
 *****************************************/