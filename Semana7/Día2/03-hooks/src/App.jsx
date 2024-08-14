import { useState } from "react";

const App = () => {
  //const [estado, setFuncionEstado] = useState(valor_inicial);
  const [contador, setContador] = useState(0);

  // let contador = 0;
  const manejarClick = () => {
    // contador++;
    // console.log("click contador:", contador);
    // Cuanco deseemos cambiar el estado invocamos esa función para actualizar el estado 
    setContador(contador + 1);
  }
  //cuando cambie el estado se va a volver a dibujar mi componente
  return (
    <div>
      <span>Contador: {contador}</span>
      <br/>
      {/*onClick, onSubmit, onChange, prefijo 'on' después el Evento*/}
      <button onClick={manejarClick}>
        Incrementar contador
        </button>
    </div>
  )
}

export default App