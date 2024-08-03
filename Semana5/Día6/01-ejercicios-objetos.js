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