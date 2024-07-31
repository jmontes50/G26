//un algoritmo que dependiendo de la hora me diga que saludo debe usar

let hora = prompt("Que hora es?");
console.log(typeof hora);
//lo convertimos a número
let numHora = parseFloat(hora);
console.log("numhora", typeof numHora);
//NaN -> Not A Number, su tipo es númerico
console.log(isNaN(numHora))

if (numHora < 12) {
  console.log("Buenos días");
  //para poner más condiciones, utilizamos la sentencia else if
}else if (numHora < 18) {
  console.log("Buenas tardes");
  //otra condición
}else if (numHora <= 24){
  console.log("Buenas noches");
  //y en caso no se cumpla ninguna siempre quedara el else por defecto/default
}else {
  console.error("Ingrese un valor correcto");
}

