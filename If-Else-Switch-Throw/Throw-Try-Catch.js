/**********************************************
 * THROW (tirar) - 
 * TRY (intentar) / CATCH (agarrar)
 * 
 * El "throw" tira, o sea, genera, un error, o 
 * "excepción" (Exception en inglés).
 * Cuando ocurre un error en javascript, 
 * se corta la ejecución de nuestro código, y con
 * el throw podemos customizar y manejar este
 * comportamiento.
 * El throw nos permite generar un error custom,
 * con un mensaje personalizado, 
 * Decimos usualmente, "tirar una excepción"
 * (throw an exception).
 * Ex: throw "Error parseando la data"; 
 * Ex: throw 404; // Se suelen usar códigos numéricos
 * 
 * Todas las excepciones generadas por un programa, 
 * definidas por el programador o no, pueden ser
 * agarradas por el mismo, usando la estructura
 * "try/catch".
 * 
 * Ex:
 *  try{
 *      addler(0);
 *  }catch(err) {
 *      console.log("error");
 *  }
 * 
 **********************************************/

try {
	throw 500;
} catch (err){
	console.log(`An error ocurred with number: ${err}`);
}