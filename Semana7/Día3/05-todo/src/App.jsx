import { useState, useEffect } from "react";

const App = () => {
  //lista tareas que tengo pendientes
  const [tareas, setTareas] = useState([]);
  //componentes controlados, para el input de tarea
  const [inputTarea, setInputTarea] = useState("");

  const manejarInputTarea = (e) => {
    setInputTarea(e.target.value);
  };

  const agregarNuevaTarea = () => {
    //usando push
    // const copiaTareas = [...tareas];
    // copiaTareas.push(inputTarea);
    // setTareas(copiaTareas);
    //usando spread operator
    setTareas([...tareas, inputTarea]);
  };

  const eliminarTarea = (indice) => {
    // console.log("indice", indice);
    const seElimina = confirm("Desea eliminar la tarea?");
    if(seElimina){ //si es que seElimina es true, eliminamos
      const copiaTareas = [...tareas]; //a esta copia si la podemos modificar
      copiaTareas.splice(indice, 1);
      // console.log(copiaTareas);
      setTareas(copiaTareas);
    }
  }

  //Como lo harias usando un useEffect?
  //cada vez que cambie el estado de tareas -> hacer que inputTarea este limpio

  return (
    <>
      <div>
        <label htmlFor="nueva-tarea">Ingrese la nueva tarea</label>
        <input
          type="text"
          id="nueva-tarea"
          placeholder="Ej. Comprar Adobo"
          value={inputTarea}
          onChange={manejarInputTarea}
        />
        <br />
        <button onClick={agregarNuevaTarea}>Agregar Tarea</button>
        <hr />
        {/* {Renderizado de Listas} */}
        {/* datos -> JSX */}
        {tareas.map((tarea, indice) => (
          <div key={indice}>
            <span>{tarea} </span>
            <button onClick={() => {
              eliminarTarea(indice);
            }}>X</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
