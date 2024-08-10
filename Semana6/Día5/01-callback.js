/*
//ciudadano de primera clase
//podemos asignar una función a una variable
const suma = (a, b) => {
  return a + b;
};

//utilizar una función como argumento
const operacion = (funcion, a, b) => {
  return funcion(a, b);
};
//tanto suma...
console.log(operacion(suma, 10, 20));
//...como la función flecha anónima que estamos pasando a operación serian callbacks
console.log(
  operacion(
    (a, b) => {
      return a * b;
    },
    10,
    20
  )
);
*/

//síncrono, todo se va a ejecutar 01 detrás de otro
//JS va a tener 01 solo hilo de ejecución

//setTimeout va a recibir una función y un tiempo en ms
//ejecutará la funcion después de ese tiempo

const ejecutarEnOrden = (parametroCallback) => {
  //tarea mi asincrona, es el setTimeout
  setTimeout(() => {
    console.log("Hola!");
    parametroCallback();
  }, 3000);
};

const funcionCallback = () => {
  for (let i = 0; i < 4; i++) {
    console.log(i);
  }
  console.log("adios");
}

ejecutarEnOrden(funcionCallback);
