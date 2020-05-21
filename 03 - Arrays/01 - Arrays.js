// 1 Variable Pero que puede alojar muchos datos
// 2 Matrices - Vectores - 
let miArray = [0,1,2,3,4,5];

let diasDeLaSemana = ["lunes", "martes"];
let diasDeLaSemana[8] = "Osvaldo";

//
console.log(diasDeLaSemana[1,2,3,4,5])
//VM2039:1 sabado

console.log(diasDeLaSemana["1,2,3,4,5"])
//VM2060:1 undefined

for(let i = 0; i < 8; i++){
  console.log(diasDeLaSemana[i]);
}
//VM2308:2 lunes
//VM2308:2 martes
//VM2308:2 miercoles
//VM2308:2 jueves
//VM2308:2 viernes
//VM2308:2 sabado
//VM2308:2 domingo
//VM2308:2 Osvaldo
//VM2308:2 undefined

// es lo mismo que ...
console.log(diasDeLaSemana[0]);
console.log(diasDeLaSemana[1]);
// ...
console.log(diasDeLaSemana[8]);

// DRY - DONT REPEAT YOURSELF - No te repitas a vos mismx

for(let i = 0; i < 8; i++){
    console.log(diasDeLaSemana[i]); // Traduce el "i" a número (lee su valor) y lo usa cómo índice para leer el array
}

const usuarios = ["fede@fede.no", "fede.m.fede@gmail.com", "fede7@test.com"];

usuarios.push("fedetest4@test.test.test.no");
usuarios
//(4) ["fede@fede.no", "fede.m.fede@gmail.com", "fede7@test.com", "fedetest4@test.test.test.no"]0: "fede@fede.no"1: "fede.m.fede@gmail.com"2: "fede7@test.com"3: "fedetest4@test.test.test.no"length: 4__proto__: Array(0)
usuarios = "fede"
VM3423:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:10