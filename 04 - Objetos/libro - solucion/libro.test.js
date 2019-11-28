const libro = require('./libro');

test("Debe promediar valoracion correctamente", () => {
    expect(libro.promediarReviews()).toBe(4);
});

test("Debe devolver string de datos", () => {
    expect(libro.datos).toBe("Fede fue a una fiesta por Fede - 4444-4444-4444");
});

test("Debe agregar review correctamente", () => {
    let review = ["Juan", 3, "mediocre"];
    libro.agregarReview(...review);
    expect(libro.reviews.length).toBe(4);
});

test("Debe validar valoracion correctamente", () => {
    expect(libro.validarValoracion(3)).toBeTruthy();
});

test("Debe tirar error al validar valoracion mayor a 5", () => {
    expect(() => {
        libro.validarValoracion(6);
    }).toThrow("Valoracion debe ser entre 1 y 5");
});

test("Debe tirar error al validar valoracion menor a 1", () => {
    expect(() => {
        libro.validarValoracion(0);
    }).toThrow("Valoracion debe ser entre 1 y 5");
});

test("Debe tirar error al agregar review con valoracion incorrecta", () => {
    let review = ["Juan", 0, "mediocre"];
    expect(() =>{
        libro.agregarReview(...review);
    }).toThrow("Valoracion debe ser entre 1 y 5");
});
