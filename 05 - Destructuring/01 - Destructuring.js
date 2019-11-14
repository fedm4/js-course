/**************************************************
 * Cuando trabajamos con arrays, podemos querer
 * separarlo en variables acorde a lo que vayamos 
 * necesitando. Para esto tenemos Destructuring.
 */
[a, b] = [10, 11];
console.log(a); //10
console.log(b); //11

/*********************************************
 * Tambien podemos hacer destructuring sobre
 * objetos, usando variables con el nombre de 
 * su indice.
 */
{a, b, ...rest} = {a:1, b:2, c:3, d:4};
console.log(a) // 1
console.log(b) // 2
console.log(rest) // {c: 3, d:4}

/******************************************
 * Se pueden recibir parametros de array
 * y desestructurar de la misma forma
 * que se hace en una asignacion.
 */
const myFunc = ([a, b, ...rest]) => {
    console.log(a) // 1
    console.log(b) // 2
    console.log(rest) // {c: 3, d:4}        
}
myFunc([1,2,3,4]);

