/**********************************************
 * Con los objetos tenemos una forma de controlar
 * el ingreso y la salida de datos de forma practica
 * y comoda. Esto es a traves de accesors.
 * Popularmente conocidos como "Setters" y "Getters",
 * me permiten declarar una funcion que, sin ninguna
 * configuracion extra, va a ejecutarse cada vez que
 * quiera modificar o acceder a mi propiedad de mi objeto
 * 
 */

 const persona = {
     _nombre: "fede",
     _edad: 33,
     set nombre (nombre) {
        if(typeof nombre !== "string") {
            throw "El nombre debe ser string";
        }
        this._nombre = nombre;
     },
     get nombre () {
        return this._nombre;
     },
     set edad(edad) {
        this._edad = parseInt(edad);
     },
     get edad() {
         return `${this._edad} años`;
     }
 }
 persona.edad = "34";
 console.log(persona.edad);