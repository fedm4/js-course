/**
 * El DOM, Document Object Model, es la representacion en forma de datos
 * de nuestro documento HTML.
 * Esta representacion nos va a permitir cambiar contenido, estructura y 
 * estilos. Para hacer esto se representa el docuemnto como nodos y objetos.
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
window.alert == alert // true
a = 12;
console.log(window.a); // 12
/**
 * Para acceder y navegar en nuestro documento podemos usar 
 * parentElement y children
 * 
 */
<div id="myDiv">
    <span id="span1">Span 1</span>
    <span id="span2">Span 2</span>
</div>

document.querySelector("#span1").parentElement.id; // myDiv
document.querySelector("#myDiv").children; // [<span1>, <span2>]
document.querySelector("#myDiv").children[0].id // span1

/**
 * Para agregar un javascript a nuestro HTML tenemos dos formas
 * de hacerlo.
 * La primera y menos recomendada es a través de poner el propio
 * código en la página. Este codigo puede ir en cualquier parte
 * de nuestro html, incluyendo el <head>, pero es buena practica
 * ponerlo en el head o al final del archivo, dependiendo 
 * cuando querramos que se ejecute. Esto ultimo porque cuando se
 * imprime, se ejecuta, en consecuencia si voy a modificar el DOM
 * y tengo mi codigo arriba de todo, sin que existan los elementos,
 * voy a recibir un error.
 */
<script>
    // mi codigo javascript
    console.log("Hola!");
</script>

/**
 * La otra opcion es hacerlo con el mismo script tag pero
 * llamando a un archivo.js. Las mismas reglas de ejecucion
 * rigen para esto. Tanto en el <head> como al final de mi 
 * archivo HTML, y dependiendo de cuando quiero ejecutarlo.
 */
<script type="text/javascript" src="path/to/archivo.js">
</script>




