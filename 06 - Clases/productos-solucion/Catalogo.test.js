const Catalogo = require('./Catalogo');
const Chocolate = require('./Chocolate');
const Auricular = require('./Auricular');
const Perfume = require('./Perfume');
const Producto = require('./Producto');

test("Agregar productos a mi catalogo", ()=>{
    const catalogo = new Catalogo();
    const choco = new Chocolate(
        1,
        "Block",
        "Cofler",
        80,
        0,
        50,
        true,
        "bestia",
        ["mani"]
    );

    catalogo.agregar(choco);
    expect(catalogo.lista.length).toBe(1);
    expect(catalogo.lista[0]).toStrictEqual(choco);
});

test("Valida correctamente mi producto", ()=>{
    const auri = new Auricular(1, "P01", "Sony", 1000, 0, false, false);
    const catalogo = new Catalogo();
    expect(catalogo.validarProducto(auri)).toBeTruthy();
});

test("Tira error al validar producto", ()=>{
    const catalogo = new Catalogo();
    expect(() => {
        catalogo.validarProducto({
            id: 1,
            marca: "",
            nombre: "",
            precio: 10
        });
    }).toThrow();
});

test("Borra mi catalogo", ()=>{
    const perfume = new Perfume(
        1,
        "algo",
        "Channel",
        100,
        0,
        "floral",
        "100ml"
    );
    const catalogo = new Catalogo();
    catalogo.agregar(perfume);
    expect(catalogo.lista.length).toBe(1);
    catalogo.borrar(1);
    expect(catalogo.lista.length).toBe(0);
});

test("Tira error cuando intento borrar inexistente", ()=>{
    let catalogo = new Catalogo();
    expect(()=>{
        catalogo.borrar(1);
    }).toThrow();
});


test("Obtengo lista de productos", ()=>{
    // 2. Crear el catalogo
    // 3. agregar productos a catalogo
    // 4. pedir lista
    const auri = new Auricular(
        1,
        "H01",
        "Sony",
        2000,
        0,
        false,
        false
    );
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
    const perf = new Perfume(
        1,
        "P01",
        "Hugo Boss",
        5000,
        0,
        "amaderada",
        "50ml"
    );
    const prod = new Producto(1, "Mi Prod", "Mi Marca", 10, 0);
    const listaEsperada = [
        "Auriculares Sony H01 con cable - cerrados",
        "Milka Leger - Chocolate con leche - aireado - con almendras y pasas - 40% de cacao.",
        "Perfume P01 de Hugo Boss con fragancia amaderada en presentacion de 50ml",
        "Producto Mi Marca - Mi Prod"
    ];

    const catalogo = new Catalogo();
    catalogo.agregar(auri);
    catalogo.agregar(choco);
    catalogo.agregar(perf);
    catalogo.agregar(prod);

    expect(catalogo.obtenerDescripciones()).toStrictEqual(listaEsperada);
});