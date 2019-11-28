class Producto {
    constructor(id, nombre, marca, precio, descuento){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.descuento = descuento;
    }
    get descripcion () {
        return `Producto ${this.marca} - ${this.nombre}`;
    }
}

module.exports = Producto;