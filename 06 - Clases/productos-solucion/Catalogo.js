const Producto = require('./Producto');

class Catalogo{
    constructor(){
        this.lista = [];
    }
    
    validarProducto(producto){
        if(!(producto instanceof Producto)){
            throw "Se puede agregar solo productos.";
        }
        return true;
    }

    agregar(producto){
        this.validarProducto(producto);
        this.lista.push(producto);
    }

    borrar(id){
        let index = this.lista.findIndex(producto =>{
            return producto.id == id;
        });
        if(index == -1) {
            throw "No se encontro ningun producto con ese id";
        }
        this.lista.splice(index, 1);
    }

    obtenerDescripciones(){
        return this.lista.map(producto => {
            return producto.descripcion;
        });
    }
}

module.exports = Catalogo;