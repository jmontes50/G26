/**
 * Tendremos un array/arreglo de números enteros positivos, donde se buscará modificar el arreglo para que si es un número impar este se multiplique por 2, esto debe aplicarse a todos los números impares encontrados
 */

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let i = 0; i < numeros.length; i++) {
    //ya sabemos si es impar
    if(numeros[i] % 2 !== 0){
        // numeros[i] = numeros[i] * 2;
        numeros[i] *= 2;
    }
}

console.log(numeros);