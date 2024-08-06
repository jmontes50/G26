let pokemon1 = {
    nombre: "Pikachu",
    ataque: 50,
    defensa: 25,
    tipo: "Eléctrico",
    nivel: 10
}
//copia por referencia
let pokemon2 = pokemon1;

console.log("pokemon1")
console.table(pokemon1);

console.log("pokemon2");
console.table(pokemon2);

//Nuestro pokemon2 con la realidad totalmente alterada, se fue a una pelea  contra Onix de Cristal

pokemon2.defensa = 5;
pokemon2.nivel = 11;

console.log("pokemon2 después de la pelea");
console.table(pokemon2);

console.log("pokemon1 después de la pelea");
console.table(pokemon1);

let nombre = "Victor";

let nombre2 = nombre;

nombre2 = "Victor Von Doom";

console.log({ nombre })
console.log({ nombre2 })