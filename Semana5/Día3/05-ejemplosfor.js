/**
 * Simulación de ahorro mensual
 */

let ahorroMensual = 200;
let meses = 12;
let totalAhorrado = 0;

for(let mes = 1; mes <= meses; mes++){
  let seAhorro = confirm(`Se ahorro el mes: ${mes}`); //booleano
  //Si se evalua una expresión booleana en el if, no es necesario ponerle === true
  if(seAhorro){
    // totalAhorrado = totalAhorrado + ahorroMensual;
    //si es que se ahorro vamos a ir acumulando el monto en totalAhorrado
    totalAhorrado += ahorroMensual;
  }
}

console.log(`En ${meses} meses se ahorro un total de: ${totalAhorrado}`);