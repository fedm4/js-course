/**
 * Los bucles for son una forma de repetir 
 * una acción una determinada cantidad de veces.
 * 
 * Primero, declaro una variable que va a vivir
 * únicamente dentro de mi loop, asignandole un valor 
 * número, en este caso.
 * 
 * Luego viene la condición de ejecución. O sea, cual es la condición
 * para que se siga ejecutando este loop. En este caso,
 * la variable i tiene que ser menor a 10
 * 
 * Por último, tenemos una acción que se ejecuta al finalizar
 * cada ciclo del loop. En este caso i++ (que es igual a i = i + 1)
 * 
 * Adentro del loop, puedo hacer cualquier tipo de acción, e incluso
 * usar mi variable i, que vive solo mientras existe este for. 
 */
for (let i = 0; i < 10; i++) {
    console.log(`Ejecutando - Valor de i = ${i}`);
}
console.log(i); // ReferenceError
