/**
 * Las clases de javascript son una forma 
 * nueva de definir objetos.
 * Esto significa que estoy describiendo 
 * objetos en una sintaxis distinta, pero 
 * funciona, internamente, de la misma forma
 * que los objetos.
 * 
 * Lo primero que tenemos es el constructor, 
 * que va a ser el lugar donde vamos a 
 * inicializar nuestras variables.
 * 
 * De la misma forma que en objetos, tenemos 
 * getters y setters. Y tambien accedemos a 
 * nuestras propiedades o metodos usando
 * la palabra reservada "this"
 * 
 * La principal diferencia entre objetos y 
 * clases se radica en como crear un objeto 
 * nuevo.
 */
const a = 1;
let b = a;
b = 2;
a // 1
b // 2
/////////////////////////////
const a = {valor1:1};
const b = a;
const c = Object.assign({}, a);
b.valor1 = 2;
a.valor1 // 2
b.valor1 // 2
c.valor1 // 1
 
class Pelaje{
    constructor(color){
        this.color = color;
    }
}
class Gato {
    constructor(nombre, edad, vidas = 7) {
        this.nombre = nombre;
        this.edad = edad;
        this.vidas = vidas;
        this.especie = "felino";
        this.cosas = {
            esObjeto: true
        };
        this.pelaje = new Pelaje("Amarillo");
    }

    get edadGatuna () {
        return this.calcularEdadGatuna();
    }

    calcularEdadGatuna() {
        return this.edad * 9;
    }
}

// Para instanciar(crear) un nuevo objeto 
// lo hacemos con la 
// palabra reservada "new"
const michu = new Gato("Michu", 4);

/**
 * Si quisieramos hacer lo mismo
 * con objetos puros, tendriamos 
 * que hacer lo siguiente
 */
const Gato = {
    nombres: "",
    edad: 0,
    vidas: 7,
    get edadGatuna () {
        return this.calcularEdadGatuna();
    },
    calcularEdadGatuna: function() {
        return this.edad * 9;
    }
}

// Y de la siguiente forma, clonar el objeto
// gato para usarlo como una "fabrica" de objetos
// a diferencia de la clase que lo es por definicion
const michu = Object.assign({}, Gato);


/**
 * Los metodos estaticos son metodos
 * a los cuales puedo acceder sin 
 * necesidad de instanciar un objeto. 
 * O sea, no necesito tener un objeto
 * para poder utilizar la funcionalidad.
 */

class Gato {
    static maullar(maullido = "miau!") {
        return maullido;
    }
}
console.log(Gato.maullar());




class Gato {
    constructor() {
        this._nombre = "";
        this._edad = "";
    }
    set nombre (nombre) {
        this._nombre = nombre;
    }
    set edad (edad) {
        this._edad = edad;
    }
    get edad () {
        return this._edad;
    }
}