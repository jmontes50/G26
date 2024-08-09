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

const inputTarea = document.getElementById('nuevaTarea');
const inputNombre =  document.getElementById('inputNombre');

const listaTareas = document.querySelector('.lista-tareas');

const arregloTareas = []; //se van a guardar todas mis tareas

//El evento que va a manejar el form es el evento submit
form.addEventListener("submit", (ev) => {
    //para que no se dispare el evento por defecto de submit
    ev.preventDefault();
    /*
    console.log("inputTarea", inputTarea.value);
    console.log("inputNombre", inputNombre.value);
    const nuevaTarea = {
        tarea: inputTarea.value,
        nombre: inputNombre.value
    }
    console.log(nuevaTarea)
    */
   
    //formData, va a obtener la información de los input que esten dentro de un formulario en un objeto especial llamado formData
    //ev.target me indica desde donde se disparo el evento, en este caso el formulario

    const dataFormulario = new FormData(ev.target);
    // console.log(dataFormulario);
    const nuevaTarea = Object.fromEntries(dataFormulario.entries());
    // console.log(formValues);
    arregloTareas.push(nuevaTarea);
    console.log("arregloTareas:", arregloTareas);
});

// que se encargue de crear el elemento que represente una nuevaTarea
const crearTarea = (objTarea) => {
    const liTarea = document.createElement("li");
    liTarea.innerHTML = `
      <input type="checkbox" id="hecho"/>
      <span>${objTarea.tarea}</span>
    `
    return liTarea;
}

//que se encargue de dibujar esos elementos
const dibujarTarea = (tarea) => {
  const divNuevaTarea = crearTarea(tarea);
  listaTareas.appendChild(divNuevaTarea);
  // listaTareas.
}