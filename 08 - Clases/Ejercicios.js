// 1
/**
 * Crear una clase Ropa, con propiedades
 * que me permitan definir sus 
 * caracteristicas basicas (nombre,
 * tipo, medidas, y pensar otras), y me permita 
 * hacer metodos para "ponerme" la ropa.
 * De esta forma, yo deberia poder
 * tener, por ejemplo, un metodo
 * "calzar" que no funcione si 
 * es una pollera, pero si 
 * funcione si es una zapatilla.
 * 
 * Crear varios tipos distintos de ropa.
 */

 // 2
 /**
  * Transformar los distintos tipos de ropa
  * del ejercicio anterior a nuevas clases
  * que extiendan de la clase principal.
  */

  // 3
/**
 * Dada la siguiente Clase
 */
class Account {
    balance;  //Balance
    accountNumber;  //Numero de cuenta
    
    
    constructor(accountNumber) {    
      this.balance = 0.0;
      this.accountNumber = accountNumber;
    }
    
    deposit(sum) {
      if (sum < 0) throw new Error("No se puede hacer deposito negativo.");
      this.balance += sum;
    }
    
    withdraw(sum) { // retirar
      if (sum < 0) throw new Error("No se puede retirar una cantidad negativa.");
      this.balance -= sum;
    }
    
    toString() {
	    return "Acc " + this.accountNumber + ": " + "balance = " + this.balance;    
    }
}

/**
 * Escribir dos clases derivadas que sean 
 * 1. SavingsAccount (Caja de ahorro)
 *   - Deberia tener una propiedad "interest" (interes, en porcentaje).
 *   - Deberia tener ademas, un metodo que sume ese interes al balance de la cuenta.
 *   - No deberia permitirme retirar mas de lo que tengo disponible en mi balance.
 * 2. CurrentAccount (cuenta corriente)
 * 
 * Crear una clase Bank (banco). El objeto resultante deberia contener un array de Accounts. Las instancias
 * dentro de este array pueden ser de Account, SavingsAccount o CurrentAccount. Crear varios ejemplos para testear.
 * 
 * Escribir un metodo "update" dentro de Bank para iterar por CADA cuenta del array, actualizandolas de la siguiente forma:
 *   - A SavingsAccount se le suma el interes. 
 *   - A CurrentAccount se le "envia una carta" (loogeo un mensaje), si estan en numeros negativos.
 *   
 * Bank deberia tener metodos para abrir y cerrar cuentas, y pagar un dividendo a cada cuenta (Sumar al balance).
 */

 // 4
/**
 * Refactorizar la lista de productos con el 
 * carrito de compras usando clases. 
 * Vamos a tener 3 tipos de productos, 
 *  1. Perfumes
 *  2. Chocolates
 *  3. Auriculares
 * Los 3 productos van a tener distintas 
 * caracteristicas, aunque compartan marca y precio.
 * Los chocolates tienen porcentaje, leche, tipo, 
 * extras (almendras, mani, pasas). 
 * Los auriculares van a tener una variable
 * "wireless" y una "tipo" (cerrados, abiertos)
 * 
 * Voy a necesitar un metodo que me devuelva una lista
 * formateada con todos los productos y caracteristicas 
 * en un texto. Uno por linea.
 * 
 * Ademas de eso cada producto puede tener descuentos, en 
 * porcentaje.
 * 
 * Hay que refactorizar el carrito de compras, de forma
 * que tenga lo mismo que hacia antes, pero a la hora de 
 * calcular el precio, lo haga teniendo en cuenta los
 * descuentos que aplican a cada producto.
 * 
 * El carrito tiene que tener una funcion que me permita
 * listar todos los productos agregados formateados con 
 * descripcion, cantidad, y un producto por linea.
 * 
 * Por ultimo sumar una clase cupon que tiene otro descuento
 * en porcentaje. Yo puedo aplicar un solo cupon a mi carrito
 * de compras y el calculo final del precio tiene que tomar
 * en cuenta esto.
 * 
 */
