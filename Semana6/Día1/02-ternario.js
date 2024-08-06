let edades = [30, 20, 17, 25, 16];

//si existe algo de lo que le damos a buscar, retornara true o false segun sea
let edadEncontrada = edades.includes(17);

console.log(edadEncontrada);

const busqueda = () => {
    /*
    if(edadEncontrada){
        return "Se encontro"
    }else{
        return "No se encontro"
    }*/
   // expresion ? "valor si es verdadero" : "valor si es falso"
   return edadEncontrada === true ?  "Se encontro" : "No se encontro";
}
console.log(busqueda());
