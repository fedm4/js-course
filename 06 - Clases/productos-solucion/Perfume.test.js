const Perfume = require('./Perfume');

test("devuelve descripcion", ()=>{
    const perf = new Perfume(
        1,
        "P01",
        "Hugo Boss",
        5000,
        0,
        "amaderada",
        "50ml"
    );
    expect(perf.descripcion).toBe(
        "Perfume P01 de Hugo Boss con fragancia amaderada en presentacion de 50ml"
    );
});