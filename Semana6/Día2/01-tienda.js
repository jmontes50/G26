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
    const ultimoId = Math.max(...ids);
    return ultimoId + 1;
  },
  // agregarLibro: function(libro) {
  agregarLibro: function(libro) {

  }
};

biblioteca.construirLibros(misLibros);

console.table(biblioteca);

biblioteca.generarId();