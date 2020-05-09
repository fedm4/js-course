/**
 * EL spread operator (...) nos permite
 * expandir una expresion en situaciones
 * donde se esperan multiples parametros.
 */

 const myFunc = (...misParametros) => {
    //
    console.log(misParametros[0]) // 1
    console.log(misParametros[1]) // 2
    console.log(misParametros[2]) // hola
    console.log(misParametros[3]) // chau

 };
myFunc(1, 2, "hola", "chau")