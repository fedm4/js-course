/*************************************************************
 * 
 * Test unitarios
 * 
 *  npm install -g jest
 * 
 * Previo: Instalar "jest" globalmente usando npm, o yarn.
 *         Crear package.json -> Añadir "test": "jest" a scripts
 *
 * Los tests unitarios nos permiten probar nuestro código 
 * de forma especifica para una funcionalidad.
 * Por ejemplo, yo puedo probar si mi funcion anda 
 * correctamente:
 */ 
 const sumaDos = (numero) => {
       return parseInt(numero) + 2;
 };
 /************************************ 
 * Para esto voy a necesitar "casos".
 * Estos casos tienen que tener una descripción
 * clara y concisa de lo que debería suceder.
 */
/*test('suma 2 al numero 4, devolviendome 6', () =>{
    expect(sumaDos(4)).toBe(6);
});
test('suma 2 al numero 3, devolviendome 5', () => {
    expect(sumaDos(3)).toBe(5);
});
test('suma 2 al numero 1, devolviendome 3', ()=>{
    expect(sumaDos("1")).toBe(3);
});

/***********************************
 * Los archivos de los test unitarios
 * deberian llamarse <nombre-archivo>.test.js
 * Siendo lo importante que termine con
 * .test.js para que jest pueda identificarlo
 * y ejecutarlo correctamente.
 * 
 * Los tests pueden ser de diferentes tipos
 * por ejemplo, probar si un valor
 * es mayor a otro.
 */
/*test('suma 2 devuelve un numero mayor a 1', ()=>{
    expect(sumaDos(0)).toBeGreaterThan(1);
});

/************************************
 * Puedo testear buscando palabras con 
 * expresiones regulares usando toMatch.
 * De la misma forma puedo decir que no 
 * utilizando previo al match, el not.
 */
/*test('string contiene palabra test', ()=>{
    expect("esto es un test").toMatch(/test/);
});
test('string no contiene la palabra test', () => {
    expect("esto es un que?").not.toMatch(/test/);
});
/**********************************
 * Tambien podemos testear si existe un 
 * elemento en un array con .toContain()
 * y de la misma forma podemos testear
 * si se tiró un error con .toThrow().
 * En toThrow podemos incluso especificar 
 * el mensaje esperado, tanto con un string
 * como con expresiones regulares.
 */

/*const throwMeAnError = () => {
    throw new Error("This is an error");
};
const throwSimple = () =>{
    throw "This is a throw";
};
test('test de array', ()=>{
    const miArray = [
        "valor1",
        "valor2",
        "valor3"
    ];
    expect(miArray).toContain("valor3");
});
test('test de throw', ()=>{
    expect(throwMeAnError).toThrow();
});
test('test de throw error', ()=>{
    // Testea que el throw sea delel tipo de dato Error.
    expect(throwMeAnError).toThrow(Error);
});
test('test de throw string', ()=>{
    expect(throwSimple).toThrow("This is a throw");
});
test('test de throw regex', ()=>{
    expect(throwSimple).toThrow(/throw/);
});
 /********************************************** 
 * Ademas podemos preparar los valores que vamos
 * a necesitar usando beforeEach() y afterEach(), 
 * o setear algunas cosas usando beforeAll y After
 */
/*let funcionDefinida;
let miData;
beforeAll(()=>{
    funcionDefinida = () => {
        console.log(miData);
    }
    console.log('ejecuto before all');
});
beforeEach(()=>{
    miData = 0;
    console.log('ejecuto before each');
});
afterEach(()=>{
    console.log('ejecuto after each')
});
afterAll(() => {
    console.log('Ejecuto after all')
});*/


const getDia = (dia) => {
    switch(dia) {
        case "lunes": 
            return 1;
        case "martes":
            return 2;
        case "miercoles":
            return 3;
        case "jueves":
            return 4;
        case "viernes":
            return 5;
        case "sabado":
            return 6;
        case "domingo":
            return 7;
        default:
            throw "El día no existe, guache.";
    }
};

test('le paso "lunes" y devuelve 1', () => {
    expect(getDia("lunes")).toBe(1);
});
test('le paso "martes" y devuelve 2', () =>{
    expect(getDia("martes")).toBe(2);
});

test('le paso "miercoles" y devuelve 3', () =>{
    expect(getDia("miercoles")).toBe(3);
});
test('le paso "sabado" y devuelve 6', () =>{
    expect(getDia("sabado")).toBe(6);
});
test('le paso "domingo" y devuelve 7', () =>{
    expect(getDia("domingo")).toBe(7);
});

test('le paso "demango" tira error', () =>{
    expect(() => {
        getDia("demango");
    }).toThrow("El día no existe, guache.");
});