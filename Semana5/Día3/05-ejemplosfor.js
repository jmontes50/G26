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

/*
let montoBase = 2000;
let tasa = 0.03; // 3 / 100;
let meses = 6;

for(let i = 1; i <= meses; i++){
  // montoBase = montoBase * (1 + tasa);
  montoBase = montoBase + (montoBase * tasa);
  console.log(`En el mes ${i} el monto creció a: ${montoBase}`);
}
//toFixed retorna un string con los decimales limitados al número que reciba
console.log(`El monto después de los ${meses} meses creció a: ${montoBase.toFixed(2)}`);
*/

/**
 * Una clínica da un descuento a sus pacientes según el número de citas/consultas que tomen con la clínica.
 * 
 * a. las primeras 4 citas costarán 100 soles
 * b. las 5 siguientes costarán 80 soles
 * c. y las demás después de las indicadas costarán 75 c/u
 * 
 * Se requiere saber en base a la cantidad de consultas cuanto tiene que pagar el paciente al finalizar su tratamiento.
 */

/*
let cantConsultas = 6;
let costoTotal = 0;

for(let i = 1; i <= cantConsultas; i++){
  if( i <= 4 ){ //a.
    costoTotal += 100;
  } else if ( i <= 9 ){ // b.
    costoTotal += 80;
  } else { //c.
    costoTotal += 75;
  }
}

console.log(`El costo total a pagar es de: S/ ${costoTotal}`);
*/

/**
 * Imprima la tabla de multiplicar del 1 al 5 considerando de cada número que vaya del 1 al 10
 *    1 2 3 ... 10
 * 1  1 2 3
 * 2  2 4 6
 * .
 * .
 * 5 5 10 15
 */

//lo for anidados
//esto iría del 1 al 5
for(let i = 1; i <= 5; i++){
  //pero deseamos para cada i mostrar su resultado multiplicandolo del 1 al 10
  for(let j = 1; j <= 10; j++){
    let resultado = i * j;
    console.log(`${i} x ${j} = ${resultado}`);
  }
  console.log("-------------");
}