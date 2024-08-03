//sintaxis clásica
//function NOMBRE (parámetros) { code }
function suma(a, b) {
  //parámetros son el equivalente a tener variables que solamente existen dentro de la función
  let resultado = a + b;
  //para devolver/entregar el resultado de la ejecución de la función usaremos return
  return resultado;
}

//nombrefuncion(argumentos) --> invocación de la función
let sumatoria = suma(50, 75);

console.log(sumatoria);

/**
 * definamos una función que nos ayude a calcular el igv de un producto
 */

function calcularIGV(precio) {
  //let precioFinal = precio * 1.18;
  //return precioFinal;
  return precio * 1.18;
}

console.log(calcularIGV(45));

//funciones flecha
//calcular un margen de ganancia del 15%
// let calcularMargen = (precio) => {
//     return precio * 1.15;
// }

//si solamente tengo 01 parámetro, le puedo quitar los parentesis
// let calcularMargen = precio => {
//     return precio * 1.15;
// }

//si directamente la función va a retornar algo
//puedo poner la expresión a retornar
//directamente después de la flecha
let calcularMargen = (precio) => precio * 1.15;

console.log(calcularMargen(100));

//ciudadano de primera clase
//En JS casi todo incluyendo funciones se pueden asignar a una variable
