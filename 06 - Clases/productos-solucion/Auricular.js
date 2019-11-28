const Producto = require('./Producto');

class Auricular extends Producto{
    constructor(id, nombre, marca, precio, descuento, wireless, abiertos){
        super(id, nombre, marca, precio, descuento);
        this.wireless = wireless;
        this.abiertos = abiertos;
    }
    get descripcion(){
        let conCable = this.wireless ? "wireless":"con cable";
        let abiertos = this.abiertos ? "abiertos" : "cerrados";
        return `Auriculares ${this.marca} ${this.nombre} ${conCable} - ${abiertos}`;
    }
}

module.exports = Auricular;