const ejecutar = () => {
  return new Promise((resolve, reject) => {
    resolve("Éxito 😺");
  });
};

ejecutar()
.then((resultado) => {
  console.log(resultado);
})