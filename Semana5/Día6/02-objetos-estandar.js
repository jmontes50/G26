/*let gato = {
    nombre: "Cat"
}

console.log(gato.nombre);

let nombre = "Juan";

console.log(nombre.length);
let nombreMayus = nombre.toUpperCase()
console.log(nombreMayus)
console.log(typeof nombreMayus)

// let apellido = "Perez";
let apellido = new String("Perez");
let apellidoMayus = apellido.toUpperCase();
console.log(apellidoMayus)
console.log("Uppercase", apellido)
console.log(typeof apellido)

//Prototypes - prototipos

let nombres = ["Carla", "Ximena", "Sol"];

console.log(nombres);
*/

let nums = [1, 2, 3, 4];

console.log(nums);
console.log(typeof nums);

//vamos a tener propiedades y métodos a disposición para facilitarnos ciertar tareas
//y al acceder a estos méotods y propiedades se envidencia que son objetos por la sintaxis al utilizarlos Objeto.Propiedad u Objeto.Método
nums.push(5);
console.log(nums.length);

let numero = 20;
console.log(numero);
//al invocar a .toString() lo esta envolviendo en un objeto temporal
let numATexto = numero.toString(); //lo convertimos a un string
console.log(numATexto);
console.log(typeof numATexto);

//Javascript automaticamente crea un objeto temporal cuando necesitamos hacer más operaciones y asi nos facilita el acceso

let numObj = new Number(100); //forzando las cosas, para que se quede como obj
console.log(numObj);
console.log(typeof numObj);

let suma = 50 + numObj;
console.log(suma);