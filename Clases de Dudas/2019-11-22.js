class Vaso {
    constructor(){
      this.nombre = "pepe";
    }
  }
  
  const vaso1 = new Vaso();
  
  Vaso
  
  miPepe.nombre
  
  
  
  
  
  const sumar = (val1, val2) => {
    return val1 + val2;
  }
  
  const sumar2 = (val) =>{
    return sumar(val, 2);
  }
  
  
  sumar2(1) // 3
  
  
  
  
  
  
  
  
  
  
  [0,10, 20, 30].forEach(element => {
    console.log(element) // 0, 10, 20, 30
  });
  
  for (let element of [0, 10, 20 , 30]) {
    console.log(element) // 0, 10, 20 , 30
  }
  
  [0,10,20,30].indexOf(10) // 1
  
  [0,10,20,30].findIndex(element => {
    return element == 10;
  }); // 1
  
  const fede = {
    id: 1,
    name: "fede"
  };
  for (let indx in fede) {
    console.log(indx) // id, name
  }
  
  
  
  
  new Chocolate(80,true,null,"almendras","milk",1,0,1);
  new Chocolate(80,true,null,"milk",1,0,1);
  class Chocolate extends Producto {
    constructor(
      porcentaje, 
      leche, 
      tipo, 
      marca, 
      precio, 
      descuentos, 
      id,
      extras =null) {
        super("chocolate", marca, precio, descuentos, id);
        let extrasPosibles = ["almendras", "mani", "pasas", null];
        this.porcentaje = porcentaje;
        this.leche = leche;
        this.tipo = tipo;
        if (Chocolate.validaciondeextras()){
          this.extras = extras;
        }
    };
    static validaciondeextras(extras){
      //
      return true o false;
    }
  };
  
  
  
  class Padre {
    constructor(id, name){
      //
    }
    getHola(){
      return "hola!";
    }
  }
  
  class Hijo100 extends Padre{
    constructor(id, name){
      super(id, name);
    }
    getSaludo2(){
      return "hola capo!";
    }
  }
  const hijo100 = new Hijo100(1, "name");
  hijo100.getHola();
  hijo100.getSaludo2();
  class PadreIntermedio extends Padre {
    constructor(id, name, desc) {
      super(id, name)
    }
  }
  class Hijo101 extends PadreIntermedio{
    constructor(id, name, desc){
      super(id, name, desc);
    }
  }
  
  
  class Hijo102 extends PadreIntermedio{
    constructor(id, name, desc){
      super(id, name, desc);
    }
  }
  
  
  let array2 = [0,10,20,30].map(element => {
    return element += 1;
  });
  [1, 11, 21, 31]
  
  let array3 = [0,10,20,30].filter(element => {
    return element >= 20;
  });
  [20, 30]
  
  
  