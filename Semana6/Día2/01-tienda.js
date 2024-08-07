//podemos importarlo y cambiarle el nombre directamente, siempre y cuando sea por default
import misLibros from "./data.js";

const biblioteca = {
  libros: [],
  ventas: [], //guardaremos las ventas de forma independiente como registro
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
  },
  buscarLibroPorNombre: function(nombreLibro){
    //toUpperCase() para convertir todo a mayusculas y que coincida
    //junto con toUpperCase utilizaremos map para convertir todo el arreglo a mayusculas 
    //include para saber si existe a busqueda dentro del nombre del libro
    //findIndex para encontrar el indice del libro en el arreglo
    const nombreLibroMayus = nombreLibro.toUpperCase();
    //si quiero retornar un objeto directamente con una función flecha, tenemos que ponerlo entre parentesis
    //tener el mismo arreglo de los libros pero con el nombre en mayusculas
    // const librosMayus = this.libros.map(item => ({ ...item, nombre:item.nombre.toUpperCase()}) );
    const librosMayus = this.libros.map(item => { 
      return { ...item, nombre:item.nombre.toUpperCase() }
    });
    
    //buscamos el la búsqueda en Mayúsculas entre los libros con nombres en Mayúsculas
    // const encontrado = librosMayus.findIndex((item) => item.nombre.includes(nombreLibroMayus));
    const encontrado = librosMayus.findIndex((item) => {
      return item.nombre.includes(nombreLibroMayus);
    });
    //en caso no lo encuentre retornamos un false
    if (encontrado === -1) {
      return false
    }
    // console.log(encontrado);
    // console.log(this.libros[encontrado])
    //si es que si lo encontramos, retornamos el libro más la posición
    // return this.libros[encontrado]
    return { ...this.libros[encontrado], posicion: encontrado };
  },
  venderLibro: function(nombreUsuario, dni, nombreLibro) {
    //que en base al nombre del libro lo encontremos y podamos venderlo, venderlo implica reducir su cantidad en 1 y registrar la venta en la propiedad ventas
    const libroBuscado = this.buscarLibroPorNombre(nombreLibro);
    console.log(libroBuscado);
    //en caso no lo encuentre !libroBuscado seria true
    //si libro es un objeto lo considera truthy
    //https://arielfuggini.com/javascript-valores-truthy-falsy/
    if(!libroBuscado || libroBuscado.cantidad === 0){
      alert("No se encontro el libro ó no hay stock");
      return; //para cortar la ejecución de la función
    }
    //Si encontramos el libro, utilizando la posición reducimos la cantidad en -1 con --
    const posicion = libroBuscado.posicion;
    this.libros[posicion].cantidad--;
    //registramos la venta
    //desestructuramos las propiedades que nos interesan del libro para hacer la venta
    const {id, nombre, precio} = libroBuscado;
    //creamos un objeto con la data de esa venta
    const nuevaVenta = {
      nombreUsuario,
      dniUsuario: dni,
      idLibro: id,
      nombreLibro: nombre,
      precioLibro: precio,
      fecha: new Date()
    }
    this.ventas.push(nuevaVenta);
    alert("Venta completada!");
    console.table(this.ventas)
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

biblioteca.venderLibro("","", "quijote");
