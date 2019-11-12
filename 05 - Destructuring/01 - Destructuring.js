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
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a) // 10
console.log(b) // 20
console.log(rest) // {c: 30, d:40}
