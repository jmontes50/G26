//un algoritmo que dependiendo de la hora me diga que saludo debe usar

let hora = prompt("Que hora es?");
console.log(typeof hora);
//lo convertimos a número
let numHora = parseFloat(hora);

if (numHora < 12) {
  console.log("Buenos días");
}else if (numHora < 18) {
  console.log("Buenas tardes")
}else {
  console.log("Buenas noches")
}

