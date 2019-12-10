/**
 * Podemos modificar los atributos de estilos.
 * Para esto, tenemos varias formas de trabajar
 getComputedStyle(el) // Objeto con estilos
 */
el.style.height = "200px"; //
el.cssText // "height: 200px"
el.setAttribute("style", "height: 200px; background: blue;");


/**
 * Tambien podemos trabajar sobre las clases
 * En el caso de la clase el atributo no es "class",
 * sino "className"
 */

el.className = "mi-clase mi-clase2 ... mi-clasen"
el.className // "mi-clase"
el.classList // {Objeto con las clases}
el.classList.add("mi-otra-clase");
el.classList.remove("mi-clase");
/**
 * Agrego y elimino multiples clases al mismo tiempo
 */
el.classList.add("foo", "bar", "baz");
el.classList.remove("foo", "bar", "baz");

// Agrego multiples clases con spread operator
const cls = ["foo", "bar"];
el.classList.add(...cls); 
el.classList.remove(...cls);

/** Reemplazo */
el.classList.replace("foo", "bar");


/**
 * classList.toggle nos permite agregar si no esta la clase en el elemento, y
 * eliminar si efectivamente existe la clase en el elemento.
 */
el.classList.toggle("mi-tercer-clase");

/**
 * El segundo parametro de toggle me permite hacerlo condicionalmente. Si se cumple 
 * la condicion, hago el toggle
 */
el.classList.toggle("mi-cuarta-clase", miVariable == true );

/**
 * Contains me va a permitir buscar
 * la clase en un elemento.
 */
console.log(el.classList.contains("foo"));