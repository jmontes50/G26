let estudiante1 = "Fernando";
let estudiante2 = "Herber";
let estudiante3 = "Dennis";

//para definir un arreglo abrimos corchetes []
let arrEstudiante = ["Fernando", "Herber", "Dennis", "Alicia"]; //array de strings

console.log(arrEstudiante);
//si deseamos acceder a 01 solo item dentro del arreglo habra que llamar al nombre del arreglo e indicar el indice en corchetes
console.log(arrEstudiante[2]);

console.log(arrEstudiante[0]);

//si no se acuerdan coo escribir length, Gallina Tiene Huevos
console.log("Longitud:", arrEstudiante.length);
console.log("Type Length:", typeof arrEstudiante.length);

//no necesriamente tengo que guardar items del mismo tipo de dato
let arr = [100, true, "Hola!", ["Hi", "Bye!"]];
console.log(arr);

console.table(arrEstudiante);