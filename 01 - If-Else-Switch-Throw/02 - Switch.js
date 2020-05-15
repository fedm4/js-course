/**
 * Switch - Case me permite utilizar una variable 
 * para comparar con su valor y ejecutar una acción.
 * Esto reduce y ordena el código que podría hacerse 
 * con IF-ElseIf-Else.
 */
let booleano = true;
let variable;

if (booleano) {
    variable = "valor 1";
}else {
    variable = 2;
}
console.log(variable);

///////////////
// SWITCH - CASE
let variable = 1;
switch (variable) {
    case 1:
        // accion
        break;
    case 2:
        // accion
        break;
    default:
        // accion    
}
// ///////////////////////////
let switchVar = 2;
let variable;

switch (switchVar) {
    case 1: // if (switchVar === 1)
        variable = "a";
        console.log(1);
        break;
    case 2:// else if (switchVar === 2)
        variable = "b";
        console.log(2);
        break;
    case 3:// else if (switchVar === 3)
        variable = "c";
        console.log(3)
        break;
    default: // else
        variable = "x";
        console.log(4);
}

console.log(variable);