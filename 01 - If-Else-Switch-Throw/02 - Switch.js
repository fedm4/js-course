/**
 * Switch - Case me permite utilizar una variable 
 * para comparar con su valor y ejecutar una acción.
 * Esto reduce y ordena el código que podría hacerse 
 * con IF-ElseIf-Else.
 */
let booleano = true;
let variable = "primer valor";

variable = 2 == 1 ? "valor 1": 2
//////
let variable;
if (2 == 1) {
    variable = "valor 1";
}else {
    variable = 2;
}

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
