/**
 * Las clases en javascript tienen una herencia.
 * Esto significa que yo puedo Extender de una 
 * clase a otra, utilizando la palabra reservada
 * "extends".
 */
class Animal {
    //
}
class Perro extends Animal {
    //
}

/**
 * De esta forma yo puedo tener propiedades
 * que se definen automaticamente, asi 
 * como propiedades nuevas que solo apliquen
 * a la clase que hereda
 */
class Animal {
    constructor(especie) {
        this.especie = especie;
    }
}

class Perro {
    constructor(subespecie) {
        super("Canido");
        this.subespecie = subespecie;
    }
}
const Fido = new Perro("Galgo");
console.log(Fido.especie); // Canido
console.log(Fido.subespecie); // Galgo

/**
 * Para corroborar si las instancias
 * son de un tipo definido, podemos
 * usar "instanceof"
 */
console.log(Fido instanceof Perro); // True
console.log(Fido instanceof Animal); // True
console.log(Fido instanceof Object);  // True
console.log(Fido instanceof Array); // False