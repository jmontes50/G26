//while - mientras, mientras tanto
/**
 * while (expresión) {
 *  mientras esa expresión se considere verdadera se ejecutará lo que eset dentro de las llaves
 * }
 */

let contador = 0;

while(contador <= 10) {
    console.log(`Contandoooo! ${contador}`);
    //contador = contador + 1;
    contador++;
}
//cuando ya termino de ejecutarse el bucle, recién continua con el código que continue después al cerrar las llaves.
console.log("Fin!!!");