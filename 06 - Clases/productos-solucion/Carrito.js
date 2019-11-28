const ItemCarrito = require('./ItemCarrito');

class Carrito {
    constructor(){
        this.lista = [];
        this.cupon = null;
    }
    agregarCupon (cupon) {
        this.cupon = cupon;
    }
    agregar(idProducto, cantidad, catalogo) {
        // Busco mi producto en mi lista de carrito
        for(let itemCarrito of this.lista) {
            if(itemCarrito.producto.id == idProducto){
                itemCarrito.cantidad += cantidad;
                return true;
            }
        }
        
        // Busco mi producto en el catalogo si no existe en mi carrito
        let productoEncontrado = catalogo.find(producto =>{
            return producto.id == idProducto;
        });
        if(typeof productoEncontrado == "undefined") {
            throw "Producto inexistente";
        }
        const itemCarrito = new ItemCarrito(productoEncontrado, cantidad);
        this.lista.push(itemCarrito);
    }

    borrar(idProducto) {
        let index = this.lista.findIndex(itemCarrito => {
            return itemCarrito.producto.id == idProducto;
        });
        this.lista.splice(index, 1);
    }
    obtenerPrecioFinal(){
        let precio =  this.lista.reduce((acumulador, itemCarrito) => {
            let precioProductoFinal = (itemCarrito.producto.descuento / 100) * itemCarrito.producto.precio;
            precioProductoFinal = itemCarrito.producto.precio - precioProductoFinal;
            return acumulador += itemCarrito.cantidad * (precioProductoFinal);
        }, 0);
        let descuento = 0;
        if(this.cupon != null) {
            descuento = (this.cupon.descuento / 100) * precio;
        }
        return precio - descuento;
    }
}

module.exports = Carrito;