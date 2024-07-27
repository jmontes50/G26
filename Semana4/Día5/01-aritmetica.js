// "use strict"
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

//division
let enCuotas = conIGV / 4;
console.log("división en 4 cuotas", enCuotas);

let margenGanancia = 1.15; //15%
let precioFinal = (conIGV + (accesorios * 1.17)) * margenGanancia;
console.log("PRECIO FINAL", precioFinal);
//---------------------------------------
/* Expresion vs sentencia
Expresión las tenemos que relacionar con un valor, es todo lo que me va a dar un valor

Sentencia las podemos relacionar con una orden 
declarando y asignando
*/
let nombre = "Juan";

console.log(nombre);
//-------------------------------------
// Módulo
// let division = 1000 / 300;
// console.log("division", division);
let modulo = 1000 % 300;
console.log("Residuo:", modulo);

// operaciones
// ++ incrementar en 1;
let a = 10;
// a = 10;
a = a + 1; // 11
a++; // 12
console.log('a:', a);

let b = 20;
// b = b + 5;
b+=5;
console.log('b:', b);

let c = 100;
// c = c - 1;
c--;
console.log('c:', c);

let d = 1000;
// d = d - 50;
d-=50;
console.log('d:', d);

let e = 4;
// e = e * 2;
e*=2;
console.log('e:', e);

let f = 15;
// f = f / 3;
f/=3;
console.log('f:', f);