/*
let productos = [
  {
    nombre: "Chocolates",
    precio: 50
  },
  {
    nombre: "Billetera",
    precio: 90
  },
  {
    nombre: "Lentes de sol",
    precio: 190
  },
  {
    nombre: "Reloj",
    precio: 300
  }
]

let filtrarPorPrecio = (arreglo, precio) => {
  let productosFiltrados = [];
  for(let i = 0; i < arreglo.length; i++){
    //filtremos los precios mayores o iguales que el precio recibido;
    if(arreglo[i].precio >= precio){
      productosFiltrados.push(arreglo[i]);
    }
  }
  return productosFiltrados; //arreglo ya filtrado
}

let resultado = filtrarPorPrecio(productos, 100);

console.log(`Los productos a partir de 100 son`);
console.table(resultado);
*/

/**
 * Se tiene un arreglo de alumnos (objetos), donde cada alumno tiene su nombre y notas acumuladas del curso, el objetivo es dar un resumen donde se indique el nombre del alumno y su promedio y que indique si esta aprobado(a) (mayor ó igual de 13)
 */
/*
let alumnos = [
  {
    nombre: "Juan",
    notas: [18, 14, 17]
  },
  {
    nombre: "Angela",
    notas: [19, 13, 16]
  },
  {
    nombre: "Elvis",
    notas: [15, 18, 20]
  },
  {
    nombre: "David",
    notas: [12, 11, 13]
  },
  {
    nombre: "Edwin",
    notas: [15, 12, 16]
  }
];

let resumenNotas = (arrAlumnos) => {
  //la idea de este 1er for es que pasemos Alumno x alumno
  let resumen = [];
  for (let i = 0; i < arrAlumnos.length; i++){
    let alumnoTemporal = {
      nombre: arrAlumnos[i].nombre,
      promedio: 0, //valores por defecto
      aprobado: false //valores por defecto
    }
    //Las notas de c/alumno estan como un array
    let sumaNotas = 0;
    let cantidadNotas = arrAlumnos[i].notas.length
    for(let j = 0; j < cantidadNotas; j++){
      sumaNotas +=  arrAlumnos[i].notas[j];
      //terminará de sumar las notas
    }
    //obtenemos el promedio redondeadolo a 01 decimal y convirtiendolo a number con parseFloat
    // console.log(sumaNotas)
    alumnoTemporal.promedio = parseFloat((sumaNotas / cantidadNotas).toFixed(1));
    //en base al promedio indicamos si esta aprobado o no
    alumnoTemporal.aprobado = alumnoTemporal.promedio >= 13;
    // if(alumnoTemporal.promedio >= 13){
    //   alumnoTemporal.aprobado = true
    // } else {
    //   alumnoTemporal.aprobado = false
    // }
    resumen.push(alumnoTemporal)
  }
  return resumen;
}

console.table(resumenNotas(alumnos));
*/

/**
 * Una biblioteca necesita gestionar el manejo de sus libros, desde ingresos de nuevos libros hasta el prestamo de estos. establezca un objeto que ayude a manejar esta problemática.
 * bibliioteca {
 *  libros: Array,
 *  agregarLibro: method (Se encargará de agregar un libro),
 *  prestarLibro: method (Se encargará de cambiar el estado de un libro en especifico)
 * }
 */

let biblioteca = {
  libros: [],
  agregarLibro: (titulo, autor, isbn) => {
    let libro = {
      //el isbn es un código único que manejan los libros
      isbn: isbn,
      titulo: titulo,
      autor: autor,
      disponible: true,
      prestatario: null
    }
    biblioteca.libros.push(libro);
    console.log(`El libro ${titulo} se agrego exitosamente!`);
  }
}

biblioteca.agregarLibro("Cien años de soledad", "Gabriel García Marquez", 1);
biblioteca.agregarLibro("El mundo es ancho y ajeno", "Cesar Vallejo", 2);
biblioteca.agregarLibro("La ciudad y los perros", "Mario Vargas Llosa", 3);

console.table(biblioteca.libros);