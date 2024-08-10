
// const ejecutar = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Éxito 😺");
//   });
// };

// async function ejecutar (){
const ejecutar = async () => {
  return "Éxito 😺"; //resolve
  // throw "Algo falló! 😷"; //reject

  //en algo como esto no se puede utilizar async por la sintaxis y el uso de la palabra reservada return
  // setTimeout(() => {
  //   return "Éxito 😺"; //resolve
  // }, 2000);
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
