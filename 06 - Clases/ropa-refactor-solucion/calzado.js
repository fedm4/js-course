const Ropa = require('./ropa');

class Calzado extends Ropa{
    constructor(nombre, medida, cordones, suela){
        super(nombre, "calzado", medida, true);
        this.cordones = cordones;
        this.suela = suela;
    }
    calzar(){
        if(!this.limpio){
            throw "No se puede calzar zapatilla sucia.";
        }
        this.utilizada = true;
        return true;
    }
}

module.exports = Calzado;