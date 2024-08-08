//es que vamos a utilizar selectores de JS
//nos van a permitir referencias a elementos que esten en la estructura del html
//document -> documento HTML
const titulo = document.getElementById("titulo");

console.log("eTitulo", titulo);
console.log("eTituloTipo", typeof titulo);

titulo.innerText = "News";
titulo.style.color = "red";

//obtener elementoS por su clase
const links = document.getElementsByClassName("menu");

console.log("Links:", links);

const arrLinks = Array.from(links);

console.log("arrLinks:", arrLinks);