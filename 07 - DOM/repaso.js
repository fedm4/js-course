/*const  // no lo puedo modificar SALVO que modifique 
    //internamente un array u objeto
let // lo puedo modificar

const pepe = "pepe";
pepe = "pepe2";// error

let juan = "juan";
juan = "juan2"; // va a estar ok

const objeto1 = {
    id: 1
};
objeto1 = {
    id: 2
}; // error
objeto1.id = 2; // va a estar ok

const miObjeto = new Clase()
const miFuncion = () => {
    var miVar2 = "algo";

};
miVar2 // error
for(){
    var miVar3 = "algo"; //afuera
    let// scope adentro de llavecitas
}
var miVar1 = "algo";

function funcionDeclarada () {} // scope propio
// Mis funciones existen en tiempo de compilacion


const funcionVariable = function (){} //scope propio
const funcionArrow = () => {
    let // adentro de las llavecitas
} // no scope propio

/////////////////////////////////////////////

const miObjeto = {
    id: 1,
    metodo: function (){
        const pepe;
        this.id
        this.pepe // error
    },
    metodoArrow: () =>{
        this.id //error
        miObjeto.id // ok
    }
};

//////////////////////////////////////////

class MiClase {
    constructor() {
        this.id =1;
        this.nombre = "test";
    }

    miFuncion (nuevoId, nuevoNombre = "nombre nuevo") {
        this.id = nuevoId;
        this.nombre = nuevoNombre;
    }
}

MiClase.id; //ERROR
const miObjeto = new MiClase();
miObjeto.id // OK!
miObjeto.miFuncion(2, "nuevo nombrecito");
miObjeto.miFuncion(3);

////////////////////////////////////////////////////

const personas = ["persona1", "persona2"]
const agregarPersona = (nuevaPersona) =>{
    personas.push(nuevaPersona)
}

const personas = {
    lista: [],
    agregar : function (persona) {
        this.lista.push(persona)
    }
}

///////////////////////////////////////////////////////

const restaurant = {
    mesas: {
        lista: []
    },
    productos: {
        lista: [],
        agregar: function (nombre){
            let producto = new Producto(nombre)
            this.lista.push(producto);
        }
    }
} 






class Producto {}
class Mesa {}


this.restaurant.productos.agregar("mi nuevo prod");
*/
//////////////////////////////////////////////////////////

// 1. Empleado
// 2. Rol
// 3. lista de empleados
// 4. lista de roles

class Employee {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}

class Role {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const employeesApp = {
    employees: {
        list: [],
        add: function (id, name, role) {
            const employee = new Employee(id, name, role);
            this.list.push(employee);
        }
    },
    roles: {
        list: [],
        add: function (id, name) {
            const role = new Role(id, name);
            this.list.push(role);
        },
        findRole: function(id) {
            return this.list.find(role => {
                return role.id == id;
            });
        }
    }
}

// MVP / Minimum Viable Producto // producto minimo viable

////////////////////////////////////////////////////////

