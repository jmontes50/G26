//podemos importarlo y cambiarle el nombre
import misLibros from "./data.js";

const biblioteca = {
  libros: [],
  construirLibros: function(arrLibros) {
    this.libros = arrLibros;
  }
};

biblioteca.construirLibros(misLibros);

console.table(biblioteca);