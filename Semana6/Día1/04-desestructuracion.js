//En vez de pedir valor por valor, pido un objeto con todo
//const construirPersona = (objPersona) => {
    // objPersona.nombre
//}
const construirPersona = ({ nombre, edad, telf, genero, hobbies }) => {
    return {
        nombre, 
        edad, 
        telf, 
        genero, 
        hobbies
    }
}

let objPersona = {
    nombre: "Juan",
    genero: "Masculino",
    edad: 30,
    hobbies: ["cantar", "fútbol"],
    telf: "345672131",
    direccion:"Urb. Dolores",
    dni:"4567890"
}

// const per = construirPersona("Juan", "30", "2345678", "Másculino", ["Fútbol", "Cantar"]);
const per = construirPersona(objPersona);

const per2 = construirPersona("David", "92178794", "25", "Másculino", ["Fútbol", "Cantar"]);

console.log(per);
console.log(per2);

const gato = {
    nombre: "Abby",
    edad: 7
}

// const { nombre, edad } = gato;

// console.log(nombre);
// console.log(edad);

const usarGato = ({ nombre, edad }) => {
    console.log(nombre, edad);
}

// usarGato("Michi", 3);
// usarGato(3, "Pizza");

usarGato( gato );

//desestructuración a arreglos
const arr = ["Kiwi", "Uchuva", "Tuna"];

// const fruta1 = arr[0]; //implicaria crear una variable por c/fruta
//funciona por su posicion en vez de por la clave
const [fruta1, fruta2, fruta3] = arr;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

