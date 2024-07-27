//expresión
// algo que me da un valor

//palabra reservada - que ya esta reservado con un significado para otra cosa y que no se puede utilizar
/**
 * if (condicional/expresion){
 *  //si la expresión es verdadera se ejecutará el codigo despues de las llaves del if
 * }else {
 * //se ejecutrará el codigo dentro de las llaves de else
 * }
 * //if -> si
 * //else -> esto otro
 */

let nota = 15;

// if(nota > 12){
if(nota >= 13){
    //si la expresión es V
    console.log("Esta aprobado(a)");
}else{
    //si la expresión es F esto otro
    console.log("Desaprobo");
}

let edad = 20;
// con == estamos evaluando el valor, pero no el tipo de dato, no es recomendable
/*if(edad == "20"){
    console.log("es igual que 20");
}else {
    console.log("NO es igual que 20");
}*/

// con === estamos evaluando el valor y el tipo de dato, es lo que deberiamos utilizar siempre
if(edad === "20"){
    console.log("es igual que 20");
}else {
    console.log("NO es igual que 20");
}

let numeroGanador = 75;
let numeroAEvaluar = 75;

//!== estrictamente diferente de... (compara valor y tipo de dato)
if(numeroGanador !== numeroAEvaluar){
    console.log("Intentalo otra vez");
}else{
    console.log("Ganaste el premio!!");
}