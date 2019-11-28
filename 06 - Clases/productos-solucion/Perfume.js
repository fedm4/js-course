const Producto = require('./Producto');

class Perfume extends Producto {
    constructor(
        id,
        nombre,
        marca,
        precio,
        descuento,
        fragancia,
        peso
    ){
        super(id, nombre, marca, precio, descuento);
        this.peso = peso;
        this.fragancia = fragancia;
    }

    get descripcion () {
        return `Perfume ${this.nombre} de ${this.marca} con fragancia ${this.fragancia} en presentacion de ${this.peso}`;
    }
}

module.exports = Perfume;