/**
 * Calcular el área de un triángulo
 * Necesitamos: BASE, ALTURA, ÁREA
 */

let area = 0;
// let base = 10;
/**aunque tenemos como tipo de dato number en JS, para convertirlo a número tendremos parseFloat y parseInt, float hace referencia a un número de punto flotante e int hace referencia a un entero (integer) */
let base = prompt("Ingrese la base del triángulo");
let numBase = parseFloat(base);
console.log(numBase);
console.log(typeof numBase);
// let altura = 5;
let numAltura = parseFloat(prompt("Ingrese la altura del triángulo"));

area = (numBase * numAltura) / 2;

console.log(`El área resultante es ${area}`);