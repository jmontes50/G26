let gato = {
    //nomPropiedad: Valor,
    nombre: "Abby",
    edad: 6,
    color: "blanco",
    esAmigable: false,
    "peso-total": 4,
}

console.log(gato);

//accediendo por notación de punto
console.log(gato.nombre);

//accediendo por notación de corchete
console.log(gato['edad']);
console.log(gato["peso-total"]);

//por desestructuración
//Si tu conoces que propiedades tiene algo, lo puedes desestructurar
//En vez de hacer esto por cada propiedad que necesitemos
// let colorGato = gato.color;
// console.log(colorGato);

let { color, esAmigable } = gato;
console.log(color);
console.log(esAmigable);

//agregar propiedades adicionales
gato.altura = 0.2;
gato.hobbie = "Juzgar";

console.log("de vuelta", gato);