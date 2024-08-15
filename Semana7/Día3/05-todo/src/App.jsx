import { useState, useEffect } from "react";

const App = () => {
  //lista tareas que tengo pendientes
  const [tareas, setTareas] = useState([]);
  //componentes controlados, para el input de tarea
  const [inputTarea, setInputTarea] = useState('');

  const manejarInputTarea = (e) => {
    setInputTarea(e.target.value);
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
        <button>Agregar Tarea</button>
        <hr />
      </div>
    </>
  )
}

export default App