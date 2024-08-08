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

arrLinks.forEach((li) => {
  console.log("li:", li);
  li.style.color = "blue";
  //innerText me da el texto de un elemento
  if(li.innerText === "link1"){
    li.style.fontWeight = "bold";
    li.style.color = "green";
  }
});

//obtenemos 01 elemento como si se tratara de CSS
//#id, .clase, atributo[valor]
//#principal {propiedades de css}
const principal = document.querySelector("#principal");

console.log("main", principal);
//innerHTML me va a dar el html incluido
console.log("contenido main:", principal.innerHTML);
//al ser una propiedad me permite modificarlo
principal.innerHTML = `
  <section>
    <h2>Japón porqueeeeeeee</h2>
    <p id="primicia">lorem ipsum etc etc etc</p>
  </section>
`;

//el querySelector es muy versátil al trabajar con la sintaxis de CSS
const inputEmail = document.querySelector("input[type=email]");

console.log("inputEmail",inputEmail);

inputEmail.placeholder = "ingrese su email";

//querySelectorAll - varios elementos, igual funciona con la sintaxis de CSS
const spans = document.querySelectorAll('.info');

console.log("Spans:", spans);

spans.forEach((item) => {
  item.style.display = "block";
  item.style.color = "purple";
})