const libro = {
    autor: "Fede",
    titulo: "Fede fue a una fiesta",
    anio: 1998,
    isbn:"4444-4444-4444",
    reviews: [
        {
            nombre: "Anto",
            valoracion: 3,
            review: "HORRENDO"
        },
        {
            nombre: "Vicky",
            valoracion: 4,
            review: "Podria dedicarse a programar"
        },
        {
            nombre: "Fede",
            valoracion: 5,
            review: "El mejor libro del mundo ever!"
        }
    ],
    get datos () {
        return `${this.titulo} por ${this.autor} - ${this.isbn}`;
    },
    promediarReviews: function() {
        let total = this.reviews.reduce((acumulador, review) => {
            return acumulador + review.valoracion;
        }, 0);
        return total / this.reviews.length;
    },
    validarValoracion: (valoracion) => {
        if(valoracion < 1 || valoracion > 5) {
            throw "Valoracion debe ser entre 1 y 5";
        }
        return true;
    },
    agregarReview: function(nombre, valoracion, review){
        this.validarValoracion(valoracion);
        let nuevaReview = {
            nombre,
            valoracion,
            review
        };
        this.reviews.push(nuevaReview);
    }
};

module.exports = libro;