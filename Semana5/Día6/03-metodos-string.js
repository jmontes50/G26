let saludo = "Hola Mundo";
//[H, o, l, a,  , M, u, n, d, o] ... cadenas de caracteres

console.log(saludo.length); //propiedades

console.log(saludo.toUpperCase()); //métodos ();

console.log(saludo); //no siempre pero la gran mayoria de métodos no van a modificar el dato original

console.log(saludo.indexOf("Mundo")); //en que indice se encuentra esta palabra

console.log(saludo.includes("Mundo")); //Me indica si contiene determinado texto

console.log(saludo.includes("Marte"));

console.log("separado por espacios", saludo.split(" ")); //string ---> arreglo, separandolo por lo que le indiquemos

console.log("separados c/u", saludo.split(""));

console.log(saludo.replace("Mundo", "Fin de semana"));

let textoConEspacios = "    foo bar  ";
console.log(textoConEspacios);

console.log(textoConEspacios.trim()); //remover espacios del inicio y el final