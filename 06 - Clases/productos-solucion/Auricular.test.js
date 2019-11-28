const Auricular = require('./Auricular');

test("Devuelve descripcion", ()=>{
    const auri = new Auricular(
        1,
        "H01",
        "Sony",
        2000,
        0,
        false,
        false
    );
    expect(auri.descripcion).toBe(
        "Auriculares Sony H01 con cable - cerrados"
    );
});