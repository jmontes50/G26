const btn = document.getElementById("btn");

// eventos
//elemento.addEventListener('nombreEvento', funciónAEjecutar);
btn.addEventListener("click", () => {
  //el código que le demos aquí se va a ejecutar
  alert("Hiciste click!!!!");
});

const input = document.getElementById("inputinfo");

//el evento change va a detectar cuando un input, select, cambie
//en la función que damos al addEventListener podemos dar un parametro que represente el evento
input.addEventListener('change', (evento) => {
  //target -> objetivo
  console.log("evento", evento);
  //el propio elemento desde donde esta saliendo el evento
  console.log("target", evento.target);
  //puedo obtener el valor del input directamente de su evento
  console.log("value", evento.target.value);
})