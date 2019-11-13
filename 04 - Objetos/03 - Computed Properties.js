/**
 * Las propiedades computadas es una forma de declarar
 * nombres de keys (indices) de propiedades de objetos
 * pero dinamicamente, es decir, usando variables en lugar
 * de un texto estatico.
 * Para hacer esto, al declarar el objeto, asigno
 * el nombre de la key entre corchetes, usando una 
 * variable dentro. Esto hara que se tome como
 * key el valor de la variable.
 */

const miKey = "keyDinamica";
const miObj = {
    keyEstatica: "mi valor de key estatica",
    [miKey]: "mi valor de key dinamica"
}

miObj.keyDinamica // "mi valor de key dinamica"
