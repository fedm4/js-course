const shopping = require('./productos');

const productos = shopping.productos;
const carrito = shopping.carrito;



beforeEach(()=>{
    productos.lista = [];
    carrito.lista = [];
});

test("Agregar producto a lista de productos", () =>{
    productos.agregar(1, "mi titulo", "mi descripcion", 12.33);
    expect(productos.lista[0]).toStrictEqual({
        id: 1,
        titulo: "mi titulo",
        descripcion: "mi descripcion",
        precio: 12.33
    })
});

test("Modificar producto en lista", () =>{
    productos.agregar(1, "mi titulo", "mi descripcion", 12.33);
    productos.modificar(1, { titulo: "mi nuevo titulo", precio: 33.12 });
    expect(productos.lista[0]).toStrictEqual({
        id: 1,
        titulo: "mi nuevo titulo",
        descripcion: "mi descripcion",
        precio: 33.12
    });
});

test("Borra producto de lista por id", () =>{
    productos.agregar(1, "mi titulo", "mi descripcion", 12.33);
    expect(productos.lista.length).toBe(1);
    productos.borrar(1);
    expect(productos.lista.length).toBe(0);
});

test("Tira error cuando no existe id para borrar", () =>{
    expect(() => {
        productos.borrar(1);
    }).toThrow("Error: El id buscado no existe");
});


////////////////////////////////////////////////////////////////
test("Agrego producto al carrito", () =>{
    productos.agregar(1, "titulo", "desc", 12.33);
    carrito.agregar(1, 3);
    expect(carrito.lista[0]).toStrictEqual({
        id: 1,
        titulo: "titulo",
        descripcion: "desc",
        precio: 12.33,
        cantidad: 3
    });
});

test("Borro producto del carrito", () =>{
    productos.agregar(1, "titulo", "desc", 12.33);
    carrito.agregar(1, 3);
    expect(carrito.lista.length).toBe(1);
    carrito.borrar(1);
    expect(carrito.lista.length).toBe(0);
});

test("Tira error cuando producto no existe en carrito", () =>{
    expect(() => {
        carrito.borrar(1);
    }).toThrow("Error: Producto no existe en carrito");
});

test("Suma los precios de los productos", () => {
    productos.agregar(1, "titulo", "desc", 10.50);
    productos.agregar(2, "titulo", "desc", 20.50);
    productos.agregar(3, "titulo", "desc", 30.00);
    productos.agregar(4, "titulo", "desc", 40.00);
    carrito.agregar(1, 2);
    carrito.agregar(2, 2);
    carrito.agregar(3, 1);
    carrito.agregar(4, 1);
    const total = carrito.sumarPrecio();
    expect(total).toBe(132.00);
});



