// 001
/**
 * Escribir una funcion que nos permita pasarle un elemento 
 * y un color, y  le cambie el color de fondo al elemento.
 */

const changeColor = (element, color = undefined) => {

  if(color == undefined) {

  }
}

.toBeTruthy()
.toBeFalsy()
undefined, false, null, 0

changeColor(elemento); // correcto
changeColor(elemento, "red"); // correcto

changeColor(elemento, 0); // aunque de falsy no es correcto

changeColor(elemento, 255,6,7) // no
changeColor(elemento, "rgb(255,6,7)") // si


 //002 
/**
  * Modificar la funcion previa para que, si no se recibe
  * un color por parametro, se busque un color de forma
  * azarosamente.
  */

 const changeColor = (elemento, color) => {
  let changeColorOf = document.querySelector(elemento);
  getComputedStyle(changeColorOf);
  let backgroundColor = color;

  if (color == undefined) {
    backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  changeColorOf.style.backgroundColor = backgroundColor;
};


const cambiarHoja= (element, color = undefined) => {
  if(color == undefined) {
    color= getRandomColor();
  }
  element.style.background= color;
};

function getRandomColor() {
  let letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++ ) {
      color += letras[Math.floor(Math.random() * 16)];
  }
  return color;  // #AF30339ED
};

const assignClass = (posicion) => {
    let el = document.querySelector("#list > li");
    el.forEach(item=>item.classList.remove("active"));
    if(posicion>=0 && posicion<=5){
        el[posicion].classList.add("active");
    }else{
        throw "Posicion incorrecta"
    }
}

  // 003
/**
   * Crear una lista con varios elementos.
   * Crear una funcion que asigne la clase
   * "active" a uno de estos elementos seleccionados.
   * Ademas al mismo tiempo tiene que eliminar
   * la clase "active" del resto de los elementos.
   * Asignarle algun estilo para diferenciar la clase
   * "active" de cuando no se encuentra la misma.
   */

// 004

/**
 * Crear una funcion para aumentar tamaño 
 * de un titulo y otra para reducirlo.
 */
const increaseTitle = (titulo) => { 
  let title = document.querySelector(titulo);
  //let fontSize = getComputedStyle(title).getPropertyValue("font-size");
  let fontSize = getComputedStyle(title).fontSize; 
  fontSize= parseInt(fontSize);
  title.style.fontSize = (fontSize + 10 + "px";
}

const decreaseTitle = (titulo) => { 
  let title = document.querySelector(titulo);
  let fontSize = getComputedStyle(title).getPropertyValue("font-size");
  fontSize= parseFloat(fontSize);
  title.style.fontSize = fontSize - 10 + "px";
}

 // 005
 /**
  * Crear una lista que contenga imagenes, de las 
  * cuales se va a mostrar solo una.
  * Crear una funcion que me permita ir cambiando
  * de imagen cada vez que la ejecuto, segun el orden
  * en que estan declaradas.
  */