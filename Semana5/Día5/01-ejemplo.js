/**
 * Desarrolla una función que reorganice un array de tres números enteros. 
 * La función debe mover el primer número al final, 
 * mantener el segundo en su posición y colocar el tercero al principio. 
 * Debe retornar el array resultante.
Ejemplo de entrada y salida: 
Entrada: [3, 2, 1] 
Salida: [1, 2, 3]
Considera utilizar pop, push, shift, unshift
 */

let cambiarOrden = (arreglo) => {
    let primerNum = arreglo[0];
    //siempre el último item va a ser length - 1
    let ultimoNum = arreglo[arreglo.length - 1];
    // console.log(primerNum, " - ",  ultimoNum);
    //Como puedo eliminar el primer item del arreglo
    //shift -> elimina el primer item del arreglo
    //unshift -> agrega un item en la primera posición del arreglo
    //pop -> elimina el último item del arreglo
    //push -> agrega un item en la última posición del arreglo
    arreglo.shift(); //primer
    // console.log(arreglo);
    arreglo.pop(); //último
    // console.log(arreglo);
    //ya eliminamos el primer y último item del arreglo
    arreglo.push(primerNum); //al final
    // console.log("push", arreglo);
    arreglo.unshift(ultimoNum);
    // console.log("unshift", arreglo);
    return arreglo;
}

console.log(cambiarOrden([3, 2, 1]));