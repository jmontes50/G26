//podemos importarlo y cambiarle el nombre directamente, siempre y cuando sea por default
import misLibros from "./data.js";

const biblioteca = {
  libros: [],
  construirLibros: function(arrLibros) {
    this.libros = arrLibros;
  },
  generarId: function() {
    //necesito en base a los libros el id que sea mayor + 1, para el siguiente libros
    //con map de un arr de objetos lo convertimos a un arr con numeros de solos los ids
    const ids = this.libros.map((libro) => libro.id);
    // console.log("ids:", ids);
    //Math.max obtenemos el id con mayor valor
    const ultimoId = Math.max(...ids);
    //retornamos el mayor id + 1 para el siguiente libro
    return ultimoId + 1;
  },
  // agregarLibro: function(libro) {
  agregarLibro: function(libro) {
    const nuevoId = this.generarId(); //6, 7, 8
    //usamos un spread operator para copiar las prop de libro y le agregamos el id
    const nuevoLibro = { ...libro, id: nuevoId };
    //para agregar un nuevo libro a la propiedad libros
    this.libros.push(nuevoLibro);
  }
};

biblioteca.construirLibros(misLibros);

let libro1 = {
  nombre: "Orgullo y Prejuicio",
  descripcion: "Una historia de amor y malentendidos.",
  cantidad: 7,
  autor: "Jane Austen",
  precio: 11.99,
  imagen: "orgullo_y_prejuicio.jpg",
  categoria: "Romance"
}

biblioteca.agregarLibro(libro1);

console.table(biblioteca);
