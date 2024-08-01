/**
 * Crea un programa para una tienda que calcule descuentos en las compras. Las reglas son:
a. Si el cliente tiene una tarjeta de membresía Y el total de la compra es $100 o más, aplica un 20% de descuento.
b. Si el cliente tiene una tarjeta de membresía Ó el total de la compra es $100 o más (pero no ambos), aplica un 10% de descuento.
. En cualquier otro caso, no se aplica descuento.

 */

let totalCompra = +prompt("Ingrese el total de la compra");
let tieneMembresia = confirm("El cliente tiene membresía");
let descuento = 0;

if( totalCompra >= 100 && tieneMembresia === true) { // a.
    //0 a 1 es como decir de 0% a 100% y los decimales con los porcentajes
    descuento = 0.2;
} else if ( totalCompra >= 100 || tieneMembresia === true) { // b.
    descuento = 0.1;
} else { //c .
    descuento = 0;
}
//si es 0.2 ---> será 1 - 0.2 ---> 0.8, que sería el precio con el descuento;
// let precioFinal = totalCompra * (1 - descuento);
let montoDescuento = totalCompra * descuento; //si es 100 y descuento 0.2 ==> 20
let precioFinal = totalCompra - montoDescuento;
console.log(`El total de la compra es: ${precioFinal}`);