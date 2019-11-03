/***********************************************
 * 
 * 1. Hacer una función que guarde una lista
 *    de listas de datos de personas. Deberia
 *    guardar por cada persona, una lista de datos
 *    que incluyan el nombre completo, la edad y 
 *    la dirección de email.
 * 1b. Al ingresar nueva persona, validar que no 
 *     exista en la lista. Si existe, tirar
 *     un error. (Usar funcion distinta para validar
 *     y llamar dentro de la funcion de guardar persona).
 * 2. Hacer una función que me devuelva la lista
 *    completa de personas.
 * 3. Hacer una función que me permita encontrar
 *    una persona por email.
 * 4. Hacer una función que me permita encontrar 
 *    personas por nombre o parte del nombre.
 * 5. Hacer una función para borrar personas por mail.
 * 6. Hacer una funcion que permita modificar nombre
 *    buscando por mail.
 * 7. Hacer una funcion que permita modificar edad 
 *    buscando por mail.
 * Observaciones: Google. Mucho google.
 * 
 ************************************************/
const personas = [
    // ["nombre", 33, "email@email.com"]
];

const agregarPersona = () => {
    let name = prompt("nombre");
    let age = prompt("edad");
    let email = prompt("email");
    validarEmail(email);
    personas.push([name, age, email]);
};

const validarEmail = (email) => {
    let persona = getPersonaByEmail(email);
    if(persona) {
        throw "El emilio ya existe";
    }
};

const getPersonas = () => {
    return personas;
};

const getPersonaByEmail = (email) => {
    for(let i = 0; i < personas.length; i++){
        if(personas[i][2] == email){
            return personas[i];
        }
    }
    return false;
};

/**
 * Devuelve personas buscnadolas por su nombre
 * o parte del mismo.
 * 
 * @param {*} name
 * @returns array|boolean
 * @throws Error
 */
const getPersonaByName = (name) => {
    for(let i = 0; i < personas.length; i++) {
        if(personas[i][0].indexOf(name) > -1){
           return personas[i]; 
        }
    }
    return false;
};

const getIndexByEmail = (email) => {
    let index = personas.findIndex((persona) => {
        return persona[2] == email;
    });
    return index;
};
const deletePersonaByEmail = (email) => {
    let index = getIndexByEmail(email);
    if(index > -1){
        personas.splice(index, 1);
    }
};

const changeNameByEmail = (email, newName) => {
    let index = getIndexByEmail(email);
    if(index > -1){
        personas[index].splice(0, 1, newName);
    } 
};
const changeAgeByEmail = (email, newAge) => {
    let index = getIndexByEmail(email);
    if(index > -1){
        personas[index][1] = newAge;
    } 
};