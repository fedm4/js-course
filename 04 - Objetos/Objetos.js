/*****************************************
 * Un objeto es una colección de datos
 * relacionados, esto es variables y funciones, 
 * que se llaman propiedades y métodos
 * respectivamente, cuando están dentro 
 * de un objeto.
 * 
 * Para escribir un objeto usamos la siguiente 
 * sintaxis:
 */
const miObjeto = {};

/****************************************
 * Esto crea un objeto vacío.
 * 
 * Para crear un objeto con datos, podemos usar:
 */
const persona = {
    nombre: "Fede",
    edad: 34,
    email: "fede.m.fede@gmail.com"
};

/****************************************
 * Los "índices" de estas propiedades
 * son palabras que puedo referenciar
 * de forma clara y concisa.
 * 
 * Para acceder a estos valores puedo 
 * hacerlo a través de notación de punto.
 */
alert(persona.nombre);
/***************************************
 * Otra forma, para mostrar su similitud 
 * con arrays y sus índices, es usando []
 * corchetes
 */
alert(persona['email']);

/**************************************
 * Para escribir funciones (metodos), 
 * se hace exactamente de la misma forma 
 * que las propiedades, pero usando 
 * la palabra clave "function".
 */
const persona = {
    nombre: "Fede",
    edad: 34,
    email: "fede.m.fede@gmail.com",
    saludo: function () {
        alert(`Hola! Soy ${this.nombre}`);
    },
    saludoArrow: function () {
        alert(`Hola! Soy ${persona.nombre}`);
    },
    saludoEspecifico: function (otroNombre) {
        alert(`Hola ${otroNombre}, soy ${this.nombre}`)
    },
    showThis: function () {
        console.log(this);
    },
    showThisArrow: () => {
        console.log(this);
    },
    direccion: {
        calle: "Castillo",
        altura: "6xx",
        codigoPostal: "1414"
    },
    mostrarDireccion: function (){
        console.log(`${this.direccion.calle} ${this.direccion.altura}`)
    }
};
console.log(`${persona.direccion.calle} ${persona.direccion.altura}`)
console.log(persona.direccion.calle + " " + persona.direccion.altura)
/*****************************************
 * El "this" dentro de un metodo se refiere 
 * al objeto actual sobre el cual se está escribiendo. 
 * Por eso, el this.nombre funciona con 
 * el keyword "function"
 * 
 * Pero con las arrow functions tenemos un problema distinto.
 * Aquí, "this", se refiere a una variable global, en 
 * el caso del browser, "window". 
 * 
 * En consecuencia, lo mejor que podemos usar para hacer
 * métodos en objetos, es "function". Para el resto de 
 * los casos, seguimos usando "arrow functions".
 */
