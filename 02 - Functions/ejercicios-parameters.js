// 1
/***********************************************
 * 
 * Escribir una función que reciba como parámetro
 * un número e imprima ese número al revés.
 * Pista: Buscar como transformar los strings en arrays.
 * 
 ***********************************************/
const reverseNumber = (numberToReverse) => {
    numberToReverse = numberToReverse.toString()
                                     .split("")
                                     .reverse()
                                     .toString();
    console.log(numberToReverse);l
};
reverseNumber(4556);

"a,b,c".split(",") // ["a", "b", "c"]
"a,b,c".split("") // ["a",",", "b",",", "c"]


 //2
 /***********************************************
 * 
 * Escribir una función que reciba una palabra
 * e imprima sus letras ordenadas alfabéticamente.
 *  
 ***********************************************/

// 3
 /***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la misma con la primera letra de 
 * cada palabra en mayúsculas.
 *  
 ***********************************************/
let data = prompt("dame data");
const arr = ["hola", "mundo"];

const arr2 = arr.map((item) => {
    if(item == "hola"){
        return 101;
    }else {
        return 200;
    }
});

let arr4 = [];
for (let i = 0; i < arr.length; i++){
    if(arr[i] == "hola"){
        arr4.push( 101);
    }else {
        arr4.push(200);
    }
}

const funciondefilter = (item)=>{
    if (item == "hola") {
        return true;
    }
    return false;
};
const arr3 = arr.filter(funciondefilter);

 //4
/***********************************************
 * 
 * Escribir una función que reciba una frase
 * e imprima la palabra mas larga de la misma
 *  
 ***********************************************/

<form>
    <input id="input1" type="text" />
</form>

const funcion = (miString)=>{
    //algo con eeste string
    return miString.toUpperCase();
};
let input = document.getElementById("input1");
input.addEventListener("keyup", () => {
    input.value = funcion(input.value); 
})



let v = "Mi string, tan linda string, tan bella string."
const arr = v.split("") // ["M", "i", ",", " ", "t", "a".. ]
const arr2= v.split(",")// ["Mi string", 
                        // "tan linda string",
                        // "tan bella string"]
const arr3= v.split(" ") // ["Mi", "string,", "tan",... ""]


let pax = algo;
let tickets = lista de todos los tickets;
let ventas = lista de todos los tickets vendidos;
let ticketsSobran = 


let rx;




