import { useState, useEffect } from "react";

const App = () => {
  //lista tareas que tengo pendientes
  const [tareas, setTareas] = useState([]);
  //componentes controlados, para el input de tarea
  const [inputTarea, setInputTarea] = useState('');

  const manejarInputTarea = (e) => {
    setInputTarea(e.target.value);
  }

  const agregarNuevaTarea = () => {
    //usando push
    // const copiaTareas = [...tareas];
    // copiaTareas.push(inputTarea);
    // setTareas(copiaTareas);
    //usando spread operator
    setTareas([...tareas, inputTarea]);
  }

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
        {tareas.map((tarea) => { 
          return <div>{tarea}</div>
        })}
      </div>
    </>
  )
}

export default App