//Si es que el parámetro no va a recibir ningún valor, se asignará el valor por defecto
const construirPersona = (nombre = "Juan", edad = 25, hobbies = ["ninguno"]) => {
    // return {
    //     nombre: nombre,
    //     edad: edad,
    //     hobbies: hobbies
    // }
    return {
        //si es que mi propiedad y valor van a ser lo mismo, lo puedo reducir a solamente una palabra
        nombre,
        edad,
        hobbies
    }
}

const persona = construirPersona("Juan", 30, ["Leer", "Correr", "Cantar"]);

const persona2 = construirPersona();

const persona3 = construirPersona("Fernanda");

console.log(persona);
console.log(persona2);
console.log(persona3);

// const pais = "Perú";

// console.log({ pais });