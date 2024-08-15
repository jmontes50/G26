import { useState, useEffect } from "react";

const App = () => {
  return (
    <>
      <div>
        <label htmlFor="nueva-tarea">Ingrese la nueva tarea</label>
        <input
          type="text"
          id="nueva-tarea"
          placeholder="Ej. Comprar Adobo"
        />
        <br />
        <button>Agregar Tarea</button>
        <hr />
      </div>
    </>
  )
}

export default App