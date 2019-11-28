class Ropa {
    constructor(nombre, tipo, medida, lavable){
        this.nombre = nombre;
        this.tipo = tipo;
        this.medida = medida;
        this.utilizada = false;
        this.lavable = lavable;
        this.limpio = false;
    }
    limpiar () {
        if(!this.lavable) {
            throw "La prenda no se puede lavar.";
        }
        this.limpio = true;
        return true;
    }
}

module.exports = Ropa;