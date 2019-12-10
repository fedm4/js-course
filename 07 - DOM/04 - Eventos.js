/**
 * Los eventos del DOM son la forma en la que podemos
 * interactuar entre pagina y usuario.
 * A traves de los eventos vamos a poder ejecutar 
 * acciones (funciones) cuando algo suceda en nuestra
 * pagina.
 * 
 * Las acciones comunes son clicks, cambios de valor 
 * en un input (por ejemplo, un select cambio de valor, 
 * o modificaron el texto de un textarea), o incluso
 * agrandar o achicar la pantalla.
 * 
 * Podemos ver la lista de eventos entera en este link
 * https://developer.mozilla.org/es/docs/Web/Events
 * 
 * La forma de empezar a usar eventos es a traves
 * de propiedades, aunque mejor aun es usar un metodo.
 * 
 */

const button = document.querySelector('#myButton');
const showAlert = event => {
    alert("Hola!");
};
button.onclick = showAlert;
button.addEventListener("click", showAlert);

///////////////////////////////////////////////////////////////

const input = document.querySelector("#myPassword");
input.onchange = event => {
    // validate my password
};

input.addEventListener("change", event => {
    // validate my password
});

let el = document.querySelector("#miId")
el.addEventListener("keyup", (event) => {
	console.log(event.target == el);
});