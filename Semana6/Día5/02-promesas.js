//hornear -> prepararCubierta -> decorar
/*
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
*/

const hornear = () => {
  return new Promise((resolve, reject) => {
    // dentro de la promesa es donde vamos a poner nuestra tarea asíncrona
    setTimeout(() => {
      const resultado = "torta horneada!";
      resolve(resultado); //fue bien, es un resultado ➕
      // reject("Se quemo la torta 🔥"); //resultado negativo ➖
    }, 2000)
  })
}

const prepararCubierta = (torta) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`${torta} y cubierta lista!!`)
  }, 3000);
})

hornear()
.then((torta) => { //then me permite obtener el resultado de resolve
  console.log(torta);
  //para encadenar una promesa tras otra en el then de una retornare otra promesa
  return prepararCubierta(torta);
})
//colocamos abajo el then pero que estará asociado a la promesa que retornamos antes
.then((tortaConCubierta) => {
  console.log(tortaConCubierta);
})
.catch((error) => { //catch me permite capturar el resultado de reject
  console.log(error)
});