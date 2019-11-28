const recetaPizza = {
    nombre: "pizza",
    ingredientes: [
        {
            ingrediente: "harina",
            cantidad: 300,
            medida: "gramos"
        },
        {
            ingrediente: "levadura",
            cantidad: 3,
            medida: "gramos"
        },
        {
            ingrediente: "sal",
            cantidad: "una",
            medida: "pizca"
        },
        {
            ingrediente: "agua",
            cantidad: "un",
            medida: "vaso"
        }
    ],
    get receta(){
        let receta = `La receta de ${this.nombre} lleva `;
        this.ingredientes.forEach((ingrediente, index) => {
            if(index == this.ingredientes.length -1) {
                receta += " y ";
            }else if(index > 0) {
                receta += ", ";
            } 
            receta += `${ingrediente.cantidad} ${ingrediente.medida} de ${ingrediente.ingrediente}`;
            
            if(index == this.ingredientes.length -1) {
                receta += ".";
            }
        });
        return receta;
    }
};

module.exports = recetaPizza;