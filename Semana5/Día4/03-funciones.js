//function NOMBRE (parámetros) { code }
function suma (a, b) {
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

function calcularIGV (precio) {
   //let precioFinal = precio * 1.18;
    //return precioFinal;
    return precio * 1.18;
}

console.log(calcularIGV(45));