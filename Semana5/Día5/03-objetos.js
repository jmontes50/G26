let gato = {
    //nomPropiedad: Valor,
    nombre: "Abby",
    edad: 6,
    color: "blanco",
    esAmigable: false,
    "peso-total": 4,
    //métodos, es una función dentro de un objeto
    //this
    maullar: () => {
        //cuando utilizamos this dentro de una función flecha, o da undefined o va a referenciar a un objeto llamado window, que representa el navegador.
        return `${gato.nombre} hace miau miau miau...`;
    },
    juega: function () {
        //this hace referencia al propio objeto donde se este utilizado
        return `${this.nombre} juega con una caja`;
    },
    comer() {
        return "ñam ñam ñam..."
    },
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

console.log(gato.maullar());

console.log(gato.juega());

console.log(gato.comer());