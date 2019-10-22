
/******************************************************************************
 * 
 * 1. Pedir un mes del año por prompt en números 
 *    (ej: 12)
 * 2. Devolver el mes del año en texto (ej: "Diciembre")
 * 3. Hacer 2 veces, una con SWITCH Y otra 
 *    con IF-ELSE IF-ELSE
 * 
 ****************************************************************************/

 /******************************************************************************
 * 
 * 1. Pedir un día de la semana por prompt en texto 
 * (ej: "Lunes")
 * 2. Devolver el número del día (ej: 2)
 * 3. En caso de que el día ingresado no exista, tirar
 *    un error y agarrarlo, e imprimirlo.
 * 
 ****************************************************************************/

try {
    let dia = prompt("dia de la semana");
    dia = dia.toLowerCase();
    switch(dia) {
        case "lunes":
            console.log(1);
            break;
        case "martes":
            console.log(2);
            break;
        case "miércoles":
        case "miercoles":
            console.log(3);
            break;
        case "jueves":
            console.log(4);
            break;
        case "viernes":
            console.log(5);
            break;
        case "sábado":
        case "sabado":
            console.log(6);
            break;
        case "domingo":
            console.log(7);
            break;
        default:
            throw "No Existe El Dia Ingresado";
    }
} catch (err) {
    console.warn(err);
    throw "Error en switch de dias";
} finally {
    console.log("Proceso terminado en x segundos");
}

console.log("mensaje nuevo");

