/*
const ejecutar = () => {
  return new Promise((resolve, reject) => {
    resolve("Éxito 😺");
  });
};
*/
// async function ejecutar (){
const ejecutar = async () => {
  // return "Éxito 😺"; //resolve
  throw "Algo falló! 😷"; //reject
}
/*
ejecutar()
.then((resultado) => {
  console.log(resultado);
})
.catch((error) => {
  console.log(error)
})
*/
const comenzar = async () => {
  //trycatch me permite capturar errores, no solo de promesas
  try {
    //intenta esto
    const resultado = await ejecutar(); //then ⌛
    console.log(resultado);
  } catch (error) { //catch
    console.log(error);
  }
}
comenzar();
