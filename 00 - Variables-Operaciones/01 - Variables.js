/**
 * Una variable es una forma de guardar información y modificar o reemplaza esa información, durante un tiempo
 * determinado en nuestra aplicación. Esta información va a estar accesible o no, 
 * dependiendo de varios factores, incluyendo cuándo se crea, cuándo se lee, y 
 * desde dónde se lee. Por ahora vamos a estar usando las variables accesibles en todo nuestro código.
 * 
 * Para esto vamos a crear una variable.
 */
let lechuga;

let docente = "fede";


/** 
 * Al crear una variable simplemente declaro su nombre, y  puedo asignarle un valor. Esto es 
 * 
 * let nombre-de-variable = valor
 * 
 * El "=" me permite decir que mi variable va a guardar el valor que describo a la derecha. O sea, aquello
 * que está a la derecha se guarda en esta variable con este nombre. 
 * 
 * Al declarar el valor, implicitamente estoy declarando un "tipo de dato".
 * Los tipos de datos representan una cualidad de la información que tengo. 
 * Por ejemplo, puedo decir si un valor es un texto, o si es un número.
 * 
 */
let miVariableString = "Mi valor"; // String - Usado para textos 
let miVariableNumber = 9; // Number - Pueden ser números enteros (int) o de punto flotante(float) (2.33, 45.01304, etc..)
let miVariableNumerFloat = 54.322;
let miVariableBoolean = true; // Boolean - Verdadero o False (true - false) - Son los únicos valores posibles booleanos
let miVariableVacia = null; // null - Sirve para indicar que algo no existe o no tiene  valor
let miVariableUndefined = undefined; // undefined - valores que no han sido definidos. Si yo declaro una variable

/**
 * Estos valores puedo leerlos
 */
miVariable;
variable;
console.log(miVariableString);

/**
 * puedo reemplazarlos
 */
 miVariableString = "Este es otro valor";
 miVariableNumber = miVariableNumber + 1

 /**
  * Vamos a utilizar tres grandes ayudas para mostrar y obtener los valores 
  */
 console.log(nombreDeVariable); // Imprime en la consola el valor de la variable
 alert(nombreDeVariable); // Imprime una ventana de alerta con el valor de la variable
 nombreDeVariable = prompt("Mensaje de solicitud de datos para mi variable"); // Muestra una ventana que va a permitir
                                                                              // a un usuario ingresar el valor a guardar

/**
 * LET   - es una variable.
 *       - es modificable
 * CONST - de constante
 *       - no es modificable 
 * 
 * Las constantes guardan valor igual que una variable, pero no pueden ser modificadas.
 */

 const NOMBRE_DE_FEDE = "Fede";

 NOMBRE_DE_FEDE = "otro nombre"; // Tira error