//con var se puede redeclarar la misma variable
var numero = 10;

var numero = 100;

console.log(numero);

if (true) {
    //var no me respeta el ámbito, a excepción del ámbito de función
    var edad = 30;
}

console.log(edad);

//NO es recomendable usar VAR, en ningún contexto;

//let si respeta los ámbitos
let anio =  2024;

console.log("let", anio);

//CONST
const IGV = 0.18;
//no se puede cambiar el valor
// IGV = 0.15;

const edades = [10, 20, 30, 40];

// edades = [10, 20, 30, 40, 50];
edades.push(50);
console.log(edades);