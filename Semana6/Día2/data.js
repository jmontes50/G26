//data va a ser un módulo que almacene los datos
const libros = [
  {
    id: 1,
    nombre: "Cien Años de Soledad",
    descripcion: "Una obra maestra del realismo mágico.",
    cantidad: 10,
    autor: "Gabriel García Márquez",
    precio: 15.99,
    imagen: "cien_anos_de_soledad.jpg",
    categoria: "Ficción",
  },
  {
    id: 2,
    nombre: "1984",
    descripcion: "Una distopía sobre un futuro totalitario.",
    cantidad: 8,
    autor: "George Orwell",
    precio: 12.99,
    imagen: "1984.jpg",
    categoria: "Ciencia Ficción",
  },
  {
    id: 3,
    nombre: "Don Quijote de la Mancha",
    descripcion: "La gran novela de la literatura española.",
    cantidad: 5,
    autor: "Miguel de Cervantes",
    precio: 18.5,
    imagen: "don_quijote.jpg",
    categoria: "Clásicos",
  },
  {
    id: 4,
    nombre: "El Principito",
    descripcion: "Una historia encantadora y filosófica.",
    cantidad: 15,
    autor: "Antoine de Saint-Exupéry",
    precio: 10.99,
    imagen: "el_principito.jpg",
    categoria: "Infantil",
  },
  {
    id: 5,
    nombre: "Harry Potter y la Piedra Filosofal",
    descripcion: "El comienzo de una mágica aventura.",
    cantidad: 12,
    autor: "J.K. Rowling",
    precio: 14.99,
    imagen: "harry_potter_piedra_filosofal.jpg",
    categoria: "Fantasía",
  },
];

//cuando es recomendable usar un export default
//cuando vamos a exportar 01 sola cosa
//cuando vamos a exportar varias cosas pero 01 es mucho más importante que las demás
//una sintaxis que se llama ESmodules
export default libros;
//CommonJS es una sintaxis que viene Node.js
//module.exports = referencia
//module.exports = {las cosas que queremos exportar}
//const referencia = require('ubicacion)