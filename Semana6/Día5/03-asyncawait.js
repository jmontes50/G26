/*
const ejecutar = () => {
  return new Promise((resolve, reject) => {
    resolve("Éxito 😺");
  });
};
*/
// async function ejecutar (){
const ejecutar = async () => {
  return "Éxito 😺"; //resolve
  // throw "Algo falló! 😷"; //reject
}

ejecutar()
.then((resultado) => {
  console.log(resultado);
})
.catch((error) => {
  console.log(error)
})