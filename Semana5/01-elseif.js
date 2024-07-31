//un algoritmo que dependiendo de la hora me diga que saludo debe usar

let hora = prompt("Que hora es?");
console.log(typeof hora);
//lo convertimos a número
let numHora = parseFloat(hora);

if (numHora < 12) {
  console.log("Buenos días");
  //para poner más condiciones, utilizamos la sentencia else if
}else if (numHora < 18) {
  console.log("Buenas tardes");
  //y en caso no se cumpla ninguna siempre quedara el else por defecto/default
}else {
  console.log("Buenas noches");
}

