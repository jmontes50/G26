"use strict"
console.log("Hola Mundo desde JS!!!");
//Estamos conociendo el console.log
//Este puede recibir varios argumentos
//y si quiero... etc.
/**
 * Podemos escribir
 * en diferentes
 * lineas2
 */
//puede recibir varios argumentos
console.log("Hola", "este es otro texto", 10);
console.log("revisando variable:", 20);

//Tipos de datos
//tipado dinámico - el tipo de dato se va a definir con el valor asignado
//declarar y asignar
let nombre = "Dennis";

let apellido; //declarando
apellido = "Perez"; //asignando

console.log(nombre);

let edad = 25;
edad = 30;
console.log("1.", edad);

edad = "treinta y uno";
console.log("2.", edad);

// ciudad = "aqp"
// console.log(ciudad)

//sugiere utilizar camelCase para sus variables
let precio_audifonos_g733 = 600; //snake_case
let precioAudifonosGPro = 700 //camelCase

console.log("Tipo de dato apellido", typeof apellido);

let anio = 2024

console.log("Tipo de dato año", typeof anio);

let vuelto = 1.2;

console.log("Tipo de dato vuelto", typeof vuelto);

//que otros tipos de datos 😺
//Booleanos - Verdadero ó falso
let teQuiere = false; //true
console.log("teQuiere:", teQuiere);
console.log("Tipo de dato teQuiere", typeof teQuiere);

//undefined - no esta definido
let sueldo;
console.log("sueldo", sueldo);
console.log("tipo de dato de sueldo", typeof sueldo);