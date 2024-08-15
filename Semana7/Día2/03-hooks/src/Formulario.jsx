//componentes controlados, todo input debe estar amarrado a un estado
//porque eventualmente utilizaremos la información de ese input
//para enviarla a algún lado
import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState('Masha');

  const manejarNombre = (ev) => {
    console.log(ev.target.value);
    setNombre(ev.target.value);
  }

  return (
    <>
      <h2>Formulario</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input 
          id="nombre" 
          type="text" 
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={manejarNombre}
        />
        <br/>
        <label htmlFor="apellido">Apellido:</label>
        <input 
          id="apellido" 
          type="text" 
          placeholder="Ingrese su Apellido"

        />
        <br/>
        <label htmlFor="dni">DNI:</label>
        <input 
          id="dni" 
          type="text" 
          placeholder="Ingrese su dni"

        />
        <br/>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default Formulario;
