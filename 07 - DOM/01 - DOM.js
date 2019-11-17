/**
 * El DOM, Document Object Model, es la representacion en forma de datos
 * de nuestro documento HTML.
 * Esta representacion nos va a permitir cambiar contenido, estructura y 
 * estilos. Para hacer esto se representa como nodos y objetos.
 * 
 * Acceder al DOM se hace a traves de document. Este objeto, presente
 * en nuestro browser nos permite acceder a metodos, como
 * getElementById, getElementsByTagName, querySelector o querySelectorAll,
 * que nos van a permitir interactuar con los diferentes objetos y nodos 
 * de nuestro documento.
 * 
 * Por ejemplo:
 */
document.querySelector("#hero"); // Esto devuelve un element con id Hero.
                                    // Notese que el selector es como el de css

document.getElementById("hero")  // Cumple la misma funcion que el ej anterior

document.getElementsByClassName("miClase") // Devuelve un array con todos los 
                                                // elementos con esa clase
document.querySelectorAll(".miClase") // o puedo obtener el mismo resultado con esto.

/**
 * Por otro lado tambien tenemos el objeto "window", el objeto global donde todos
 * los demas objetos estan guardados. Este window contiene, por ejemplo, el metodo
 * "alert" o el metodo "prompt". Como es un objeto global, no es necesario llamarlo
 * para cada cosa que vamos a hacer.
 */
window.alert == alert

/**
 * 
 */