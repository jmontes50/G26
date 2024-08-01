/**
 * Simulación de ahorro mensual
 */

/*
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


/**
 * Calcular el interés compuesto: Una caja de ahorros nos brinda un interés compuesto del 3% por cada mes, calcular el interés del monto ahorrado en un lapso de 6 meses
 */

let montoBase = 2000;
let tasa = 0.03; // 3 / 100;
let meses = 6;

for(let i = 1; i <= meses; i++){
  // montoBase = montoBase * (1 + tasa);
  montoBase = montoBase + (montoBase * tasa);
  console.log(`En el mes ${i} el monto creció a: ${montoBase}`);
}
//toFixed retorna un string
console.log(`El monto después de los ${meses} meses creció a: ${montoBase.toFixed(2)}`);