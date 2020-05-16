/**
 * Podemos modificar los atributos de los elementos que seleccionamos.
 * Para esto tenemos varias propiedades y algunas funciones:
 */
let el = document.getElementById("my-element");
el.innerHTML = ""; // Devuelve todo el contenido interno del element 
    //seleccionado incluyendo los tags en formato string
el.textContent = ""; // Devuelve el contenido de texto, sin traer los tags
el.src = ""; // Devuelve el contenido del attr src 
el.href = ""; // Devuelve el contenido del attr href
el.value = ""; // Devuelve el valor que tiene un elemento 
    //de tipo input, select, textarea
el.selected = true; // Devuelve si el elemento esta seleccionado
el.id = "my-element-id"; // Devuelve el ID del elemento
el.hidden = true; // Devuelve si el elemento esta oculto

/**
 * Yo puedo acceder o modificar valores como propiedades del objeto obtenido
 */
<div id="test">Mi contenido</div>

let test = document.getElementById("test");
console.log(test.innerHTML) // Mi contenido
test.innerHTML = "<strong>Mi</strong> contenido";
console.log(test.innerHTML) // <strong>Mi</strong> contenido