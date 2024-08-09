/** Pensar fuera del código, plantear, escribir, organizar ideas
 * 1. Que objetivo tengo?????
 * - agregar tareas y mostrarlas como una lista
 * 2. donde va a estar esa información?????
 * - guardar en una variable, en un arreglo, en un estado
 * - en un arreglo
 * 3.de donde voy a sacar esa información???
 * - input, form
 * 4. tengo que transformar la información?????
 * - tipo de dato, objeto que hay que transformar
 * 5. donde voy a enviar/mostrar esa información???
 * - lista tareas que es un ul
 */

//Que referencias
const form = document.getElementById('agregarTareas');
//El evento que va a manejar el form es el evento submit
form.addEventListener("submit", (ev) => {
    //para que no se dispare el evento por defecto de submit
    ev.preventDefault();
    console.log("Form!");
});