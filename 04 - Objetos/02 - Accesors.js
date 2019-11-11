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
     nombre: "Federico",
     edad: 33,
     set ed(edad) {
        this.edad = parseInt(edad);
     },
     get ed() {
         return `${this.edad} años`;
     }
 }
 persona.ed = "34";
 console.log(persona.ed);