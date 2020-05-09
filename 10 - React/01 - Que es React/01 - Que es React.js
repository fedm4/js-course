/**
 * React es una libreria de Interfaz de usuario creada por facebook.
 * Esta, en conjunto con varios modulos que pertenecen a su ecosistema,
 * permiten realizar todo tipo de aplicaciones web avanzadas, e incluso
 * móviles.
 * El primer gran lugar en que nos permite trabajar, es en una SPA,
 * single page application, o aplicación de una sola página. Esto es por
 * cómo React ayuda a renderizar, o sea, ayudar a dibujar, 
 * el html en el browser.
 * 
 * La idea de librerías o frameworks como React, es solucionar el 
 * conocido "código spaguetti", que quiere decir, esos grandes archivos
 * de javascript, a través de presentarnos una forma de organizar
 * nuestros archivos. Vue y Angular, por ejemplo, hacen lo mismo 
 * con enfoques distintos.
 * 
 * En el caso concreto de React, el código se organiza en 
 * Componentes. Cada componente encapsula tanto HTML, como estilos
 * y funcionamiento (javascript). De esta forma, nuestro código
 * está modularizado. A su vez, cada componente va a poder
 * llamar a múltiples componentes, de forma que podemos ir
 * encadenandolos.
 * 
 * VIRTUAL DOM
 * 
 * React tiene algo llamado Virtual DOM. Esto es una representación virtual
 * del DOM, mucho más rápida, que le permite a React analizar los cambios
 * en los componentes, y de esta forma solo actualizar las cosas que se 
 * cambiaron, sin actualizar la totalidad de la página.
 * Esto React lo hace a través de algo llamado "reconciliación". 
 * React utiliza el virtual DOM como intermediario entre nuestros componentes
 * y el DOM para actualizar de manera veloz y eficiente nuestra página.
 * 
 * 
 */