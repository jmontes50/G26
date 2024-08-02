/**
 * Tendremos un array/arreglo de números enteros positivos, donde se buscará modificar el arreglo para que si es un número impar este se multiplique por 2, esto debe aplicarse a todos los números impares encontrados
 */

/*
let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let i = 0; i < numeros.length; i++) {
    //ya sabemos si es impar
    if(numeros[i] % 2 !== 0){
        // numeros[i] = numeros[i] * 2;
        numeros[i] *= 2;
    }
}

console.log(numeros);
*/

/**
 * a partir de un número inicial y un número final que sea mayor que el inicial, genere un arreglo de números enteros consecutivos en el rango de esos dos números
 */

/*
let numInicial = 13;
let numFinal = 20;
//[13,14,15,16,...,20]
let rango = []; //""
// console.log(rango.length);

for(let i = numInicial; i <= numFinal; i++){
    //push agregaba 01 item en la última posición del array, siempre al final
    rango.push(i);
    // console.log(rango)
}

console.log(rango);
*/

/**
 * Una persona tiene que comprar todos los regalos posibles para un evento, no tiene tiempo para decidir asi que comprará todo lo posible hasta que se le acabe su presupuesto.
 * 
 * Los precios de los regalos los tendrá en un arreglo, indique cuantos productos podrá comprar y cúal será su vuelto/cambio
 */

let precios = [20, 50, 30, 10, 5, 5, 20, 45];

let presupuesto = +prompt("Cúal es su presupuesto?");

let cantAComprar = 0;

let vuelto = 0;

for(let i = 0; i < precios.length; i++) {
    //como vamos a saber si ya no puede comprar más
    //no va a poder comprar si el precio del producto es mayor al presupuesto en ese momento
    if(precios[i] <= presupuesto){
        console.log(`El prod. ${i} se puede comprar`);
        //presupuesto = presupuesto - precios[i];
        presupuesto -= precios[i]; //act. presupuesto
        cantAComprar++; //cantidad de prod. a comprar
    }
}
vuelto = presupuesto; //presupuesto se irá reduciendo

console.log(`Ud. compro ${cantAComprar} productos y su vuelto es: S/ ${vuelto}`);
