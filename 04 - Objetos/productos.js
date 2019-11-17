const productos = {
    lista: [],
    agregar: function(id, titulo, desc, precio) {
        this.lista.push({
            id,
            titulo,
            descripcion: desc,
            precio
        })
    },
    modificar: function(id, dataProducto) {
        for(let producto of this.lista) {
            if(producto.id == id){
                // ["titulo", "precio"]
                let misKeys = Object.keys(dataProducto);
                for(let key of misKeys) {
                    producto[key] = dataProducto[key];
                }
            }
        }
    },
    borrar: function (id) {
        const index = this.lista.findIndex(producto => {
            return producto.id == id;
        });
        if(index == -1) {
            throw "Error: El id buscado no existe";
        }
        this.lista.splice(index, 1);
    }
};

const carrito = {
    lista: [],
    agregar: function(id, cantidad) {
        const producto = productos.lista.find((producto)=>{
            return producto.id == id;
        });
        producto.cantidad = cantidad;
        this.lista.push(producto);
    },
    borrar: function(id) {
        let index = this.lista.findIndex((producto) => {
            return producto.id == id;
        });
        if (index == -1) {
            throw "Error: Producto no existe en carrito";
        }
        this.lista.splice(index, 1);
    },
    sumarPrecio: function() {
        let total = 0;
        for(let producto of this.lista) {
            total += parseFloat(producto.precio * producto.cantidad);
        }
        return total;
    }
};

module.exports = {
    productos,
    carrito
};

