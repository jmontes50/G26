//Mi farma: a partir de 60 tienen un 10% de descuento

//Necesitamos saber si un cliente tiene descuento

//otra manera de convertirlo a número es usando +delante del prompt
let edad = +prompt("Cuál es su edad?");
console.log(edad);

if(edad >= 60) {
    console.log("Tiene descuento");
}else{
    console.log("No tiene descuento... aún");
}