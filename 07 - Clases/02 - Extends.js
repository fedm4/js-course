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
    comunicarse(){
        return true;
    }

class Perro extends Animal{
    constructor(subespecie) {
        super("Canido");
        this.subespecie = subespecie;
    }
    ladrar(){
        return "Woof";
    }
}
const Fido = new Perro("Galgo");
console.log(Fido.especie); // Canido
console.log(Fido.subespecie); // Galgo
Fido.comunicarse();
Fido.ladrar();
/**
 * Para corroborar si las instancias
 * son de un tipo definido, podemos
 * usar "instanceof"
 */
console.log(Fido instanceof Perro); // True
console.log(Fido instanceof Animal); // True
console.log(Fido instanceof Object);  // True
console.log(Fido instanceof Array); // False



///////////////////////////////////

class Auto {
    constructor(marca, modelo, color, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.motor = motor;
        this.prendido = false;
        this.cambio = "neutro";
    }
    acelerar () {
        if(this.prendido){
            return "acelero";
        }
        return "...";
    }
    subirCambio(){
        switch(this.cambio) {
            case "neutro":
                this.cambio = "primera";
                break;
            case "primera":
                this.cambio = "segunda";
                break;
            //...
        }
    }
    bajarCambio(){

    }
    prender(){
        if(...){

        }else if() {

        }else if () {
            
        }
    }
}

class Tesla extends Auto {
    constructor(){
        super("Tesla", "nose", "negro",
        "electrico");
    }
    prender(){
        this.prendido = true;
        return "....";
    }
}
class Ferrari extends Auto {
    constructor(){
        super("Ferrari", 
        "la del turco",
        "rojo",
        "combustion");
    }
    prender(){
        this.prendido = true;
        return "chispazo de combustion";
    }
}