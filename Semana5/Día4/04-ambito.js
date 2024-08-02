//scope = ámbito
//"Eso no te incumbe"

/**
 * Definamos una función que nos ayude a calcular el precio final de la venta de un producto, si el producto cuesta más de 100 soles tendra un 5% de descuento, la ganancia es del 15% y el igv del 18%;
 */
//el console.log viene de algo llamado window
//ámbito del console.log es de JS ya existe dentro de JS
console.log("ya existe!!!");

//ámbito/scope global, esta directamente en el doc
let conIGV = 1.18;

let calcularPrecio = (precio) => {
    let masGanancia = 1.15;
    let precioFinal = precio * conIGV * masGanancia;
    console.log(precioFinal);
}
calcularPrecio(100);

// console.log(precio)
// console.log(masGanancia);