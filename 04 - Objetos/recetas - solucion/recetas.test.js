const recetaPizza = require('./recetas');

test("Obtengo receta correctamente", () =>{
    expect(recetaPizza.receta).toBe(
        "La receta de pizza lleva 300 gramos de harina, 3 gramos de levadura, una pizca de sal y un vaso de agua."
    );
});