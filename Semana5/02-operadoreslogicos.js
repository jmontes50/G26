//Deadpool & Wolverine, es una pelicula para mayores de 13 años, pero si eres menor de 18 tienes que ir con tus padres
//tienes que presentar identificación
//Que variables, cosas tenemos claras
/**
 * 1, necesito saber la edad
 * 2, necesito la identificación
 * 3, si es menor de 18 pero mayor que 13 puede entrar con sus padres
 */
//colocando el símbolo + delante del prompt lo convierte a número
let edad = +prompt("Cúal es tu edad");
let traeIdentificacion = confirm("Traes identificación?");
// console.log("trae identificación", traeIdentificacion);
let vieneConApoderado = confirm("Vienes con algún apoderado?");

let esAdulto = edad >= 18 && traeIdentificacion === true; //verdadero o falso
console.log("esAdulto:", esAdulto);

let menorConApoderado = edad < 18 && edad > 13 && vieneConApoderado === true;
console.log("menorConApoderado:", menorConApoderado);

// if(edad >= 18 && traeIdentificacion === true) {
//     console.log("Puede ver la película");
// }else if(edad < 18 && edad > 13 && vieneConApoderado === true) {
//     console.log("Puede ver la película");
// }

// || ó es un operador donde al menos una de las partes tiene que ser V para que se considere toda como V
if(esAdulto || menorConApoderado) {
    console.log("Puede ver la Película");
}else{
    console.log("No puede ver la Película");
}