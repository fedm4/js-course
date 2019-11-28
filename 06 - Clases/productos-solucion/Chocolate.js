const Producto = require('./Producto');

class Chocolate extends Producto{
    constructor(
        id,
        nombre,
        marca,
        precio,
        descuento,
        cacao,
        leche,
        tipo,
        extras
    ){
        super(id, nombre, marca, precio, descuento);
        this.cacao = cacao;
        this.leche = leche;
        this.tipo = tipo;
        this.extras = extras;
    }

    get descripcion(){
        let leche = this.leche ? "con" : "sin";
        let descripcion =  `${this.marca} ${this.nombre} - Chocolate ${leche} leche - ${this.tipo}`;
        
        if(this.extras.length > 0) {
            descripcion += ` - con `;
            this.extras.forEach((extra,index) => {
                if(index == this.extras.length - 1
                    && index != 0){
                        descripcion += " y ";
                }else if(index > 0) {
                    descripcion += ", ";
                }
                descripcion += extra;
            });
        }
        
        descripcion += ` - ${this.cacao}% de cacao.`;
        return descripcion;
    }
}

module.exports = Chocolate;