const Ropa = require('./ropa');
const Calzado = require('./calzado');


test("Debo poder calzarme zapatilla", () => {
    const zapatilla = new Calzado("Zapa nike", 38.5, true, "goma");
    zapatilla.limpiar();
    expect(zapatilla.limpio).toBeTruthy();
    expect(zapatilla.calzar()).toBeTruthy();
    expect(zapatilla.utilizada).toBeTruthy();
});
