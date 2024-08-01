/**
 * for (inicializador; condicional; actualizador){
 *  código a ejecutar
 * }
 */

/*
for(let i = 0; i <= 5; i++){
    console.log(i);
}

console.log("Yo estoy después de for");
*/

//que cada uno se esta retirando
let cantidadGrupo = 10;

//i-- ====> i = i - 1;
for(let i = cantidadGrupo; i > 0; i--){
    console.log(`El integrante ${i} ya se retiro`);
}

console.log("Ya todos se retiraron");