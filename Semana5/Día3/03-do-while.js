// let contador = 0;
let contador = 5;

while(contador < 4) { //si la condicional no se cumple, no ejecuta nada
    console.log(contador);
    contador++;
}


do {
    //el código a ejecutar
    console.log(contador);
    contador++;
    //while(expresión a evaluar)
}while(contador < 7);

//---- do while como si fuera una pobre flor

let meQuiere = false;

do {
    console.log("Me quiere??????");
    meQuiere = confirm("Te quiere?????")
} while ( meQuiere === true );