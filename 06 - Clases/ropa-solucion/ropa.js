class Ropa {
    constructor(nombre, tipo, medida){
        this.nombre = nombre;
        this.tipo = tipo;
        this.medida = medida;
        this.utilizada = false;
    }
    calzar(){
        if(this.tipo != "calzado") {
            throw "Solo se puede calzar tipo calzado.";
        }
        this.utilizada = true;
        return true;
    }
}

module.exports = Ropa;