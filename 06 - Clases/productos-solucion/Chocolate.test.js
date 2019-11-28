const Chocolate = require('./Chocolate');

test("Obtengo string formateada con extra", ()=>{
    const choco = new Chocolate(
        1,
        "Leger",
        "Milka",
        100,
        0,
        40,
        true,
        "aireado",
        ["almendras", "pasas"]
    );
    expect(choco.descripcion).toBe(
        "Milka Leger - Chocolate con leche - aireado - con almendras y pasas - 40% de cacao."
    );
});