const Carrito = require('./Carrito');
const Producto = require('./Producto');
const Catalogo = require('./Catalogo');
const ItemCarrito = require('./ItemCarrito');
const Cupon = require('./Cupon');

test("Agregar producto al carrito", ()=>{
    const carrito = new Carrito();
    const catalogo = new Catalogo();
    const producto = new Producto(1,"nombre", "marca", 100, 10);
    catalogo.agregar(producto);

    carrito.agregar(1, 3, catalogo.lista);
    expect(carrito.lista.length).toBe(1);
    expect(carrito.lista[0] instanceof ItemCarrito).toBeTruthy();
    expect(carrito.lista[0].cantidad).toBe(3);
    carrito.agregar(1, 3, catalogo);
    expect(carrito.lista.length).toBe(1);
    expect(carrito.lista[0].cantidad).toBe(6);
});

test("Tira error si no existe producto", ()=>{
    const catalogo = new Catalogo();
    const carrito = new Carrito();

    expect(()=>{
        carrito.agregar(1, 2, catalogo.lista);
    }).toThrow();
});


test("Debe sumar correctamente los precios finales", ()=>{
    const catalogo = new Catalogo();
    const carrito = new Carrito();

    const prod1 = new Producto(1, "prod1", "marca1", 100, 10);
    const prod2 = new Producto(2, "prod2", "marca2", 50, 10);
    const prod3 = new Producto(3, "prod3", "marca3", 200, 0);

    catalogo.agregar(prod1);
    catalogo.agregar(prod2);
    catalogo.agregar(prod3);

    carrito.agregar(1, 3, catalogo.lista);
    carrito.agregar(2, 2, catalogo.lista);
    carrito.agregar(3, 5, catalogo.lista);

    expect(carrito.obtenerPrecioFinal()).toBe(1360);
});

test("Debe sumar correctamente los precios finales", ()=>{
    const catalogo = new Catalogo();
    const carrito = new Carrito();

    const prod1 = new Producto(1, "prod1", "marca1", 100, 10);
    const prod2 = new Producto(2, "prod2", "marca2", 50, 10);
    const prod3 = new Producto(3, "prod3", "marca3", 200, 0);

    catalogo.agregar(prod1);
    catalogo.agregar(prod2);
    catalogo.agregar(prod3);

    carrito.agregar(1, 3, catalogo.lista);
    carrito.agregar(2, 2, catalogo.lista);
    carrito.agregar(3, 5, catalogo.lista);
    
    const cupon = new Cupon(20);
    carrito.agregarCupon(cupon);

    expect(carrito.obtenerPrecioFinal()).toBe(1088);
});