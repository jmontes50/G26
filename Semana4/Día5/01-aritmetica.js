// operadores aritméticos
let cpu = 300;
let memoria = 200;
let monitor = 500;

//suma, vamos a utilizar el operador +
let precioTotal = cpu + memoria + monitor;
console.log("El precio total es:", precioTotal);

let accesorios = 50 + 90;
console.log("accesorios:", accesorios);

//restar
let cupon = 25;
let precioConDescuento = precioTotal - cupon;
console.log("Con descuento:", precioConDescuento);

//multiplicar
let totalPorDos = precioConDescuento * 2;
console.log("multiplicación por 2", totalPorDos);

let conIGV = totalPorDos * 1.17;
console.log("con IGV", conIGV);