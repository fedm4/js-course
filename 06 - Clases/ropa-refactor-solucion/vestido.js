const Ropa = require('./ropa');

class Vestido extends Ropa {
    constructor(nombre, medida, lavable, ocasion, planchable){
        super(nombre, "vestido", medida, lavable);
        this.ocasion = ocasion;
        this.planchable = planchable;
        this.planchado = false;
    }

    planchar () {
        if(!this.planchable){
            throw "No se puede planchar";
        }
        if(!this.planchado){
            this.planchado = true;
            return true;
        }
    }

    usar (){ 
        if(!this.limpio || !this.planchado) {
            throw "No podemos usar este vestido";
        }
        return true;
    }

}