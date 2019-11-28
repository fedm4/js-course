const Ropa = require('./ropa');


test("Debo poder calzarme zapatilla", () => {
    const zapatilla = new Ropa("Zapa nike", "calzado", 38.5);
    expect(zapatilla.calzar()).toBeTruthy();
    expect(zapatilla.utilizada).toBeTruthy();
});

test("Debe tirar error si me intento calzar pollera", ()=>{
    const pollera = new Ropa("Pollera Zara", "pollera", "M");
    expect(()=>{
        pollera.calzar();
    }).toThrow("Solo se puede calzar tipo calzado.");
    expect(pollera.utilizada).toBeFalsy();
});