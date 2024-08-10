//hornear -> prepararCubierta -> decorar
const hornear = (callback) => {
  //el horneado demorará un ⏱️
  setTimeout(() => {
    const resultado = "torta horneada!";
    console.log(resultado);
    callback(resultado);
  }, 2000);
}

const prepararCubierta = (torta) => {
  setTimeout(() => {
    console.log(`${torta} y cubierta lista!!`)
  }, 3000);
}

hornear(prepararCubierta);

