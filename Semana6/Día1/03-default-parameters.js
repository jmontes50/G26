const construirPersona = (nombre, edad, hobbies) => {
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

console.log(persona);

const pais = "Perú";

console.log({ pais });