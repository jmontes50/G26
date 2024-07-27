let saludo = "Hola";
let nombre = "Juan";
let saludoCompleto = saludo + " " + nombre + ' Perez';

console.log(saludoCompleto);

let edad = 30;
let meses = "8";

console.log(edad + meses);
console.log(edad - meses);

//template string --> ${}
let despedida = "Hasta Luego";

let despedidaCompleta = `
Nos vemos ${nombre}, ${despedida}.
Hasta la siguiente buen amigo
Adiós! 
Mientras tanto ${ 1 + 1 } más!
`;
console.log(despedidaCompleta);