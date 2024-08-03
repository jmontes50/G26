//BREAK
/*
let precios = [20, 50, 30, 10, 5, 5, 20, 45];

let presupuesto = +prompt("Cúal es su presupuesto?");

let cantAComprar = 0;

let vuelto = 0;

for(let i = 0; i < precios.length; i++){
    console.log(`Observando el precio ${i}`);
    if(presupuesto === 0){
        //va a cortar toda la ejecución de for
        break;
    }

    if(precios[i] <= presupuesto){
        console.log(`El prod. ${i} se compro!`);
        cantAComprar++;
        presupuesto -= precios[i];
    }
}

vuelto = presupuesto;

console.log(`Ud. compro ${cantAComprar} productos y su vuelto es: S/ ${vuelto}`);
*/

//CONTINUE
let notas = [11, 13, 14, 20, 19, 12, 14, 10];

//for que al final solamente me de las notas aprobatorias

let aprobados = [];

for(let i = 0; i < notas.length; i++){
    if(notas[i] < 13){
        //va a hacer que se salte 01 iteración
        console.log("me salto");
        continue;
    }
    aprobados.push(notas[i]);
    console.log("Más trabajoooooo...");
}

console.log(aprobados);