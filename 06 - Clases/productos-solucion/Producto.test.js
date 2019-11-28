const Producto = require('./Producto');

test("Devuelve descripcion", ()=>{
    const prod = new Producto(1, "Mi Prod", "Mi Marca", 10, 0);
    expect(prod.descripcion).toBe(
        "Producto Mi Marca - Mi Prod"
    );
});