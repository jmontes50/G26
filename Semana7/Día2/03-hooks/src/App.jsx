import { useState } from "react";
import Mostrar from "./Mostrar";
import Cambiar from "./Cambiar";

const App = () => {
  //const [estado, setFuncionEstado] = useState(valor_inicial);
  const [contador, setContador] = useState(0);

  // let contador = 0;
  const manejarClick = () => {
    // contador++;
    // console.log("click contador:", contador);
    // Cuanco deseemos cambiar el estado invocamos esa función para actualizar el estado
    setContador(contador + 1);
  };

  const manejarHipervinculo = (ev) => {
    ev.preventDefault();
  };
  //cuando cambie el estado se va a volver a dibujar/renderizar mi componente
  return (
    <div>
      <span>Contador: {contador}</span>
      <br />
      {/*onClick, onSubmit, onChange, prefijo 'on' después el Evento*/}
      <a href="https://google.com" onClick={manejarHipervinculo}>
        Ir a google
      </a>
      <br />
      {/* <button onClick={manejarClick}>
        Incrementar contador
      </button> */}
      <button
        onClick={() => {
          setContador(contador + 10);
        }}
      >
        Incrementar contador
      </button>

      <hr />

      <Mostrar contador={contador} />
      <Cambiar 
        setContador={setContador} 
        contador={contador} 
      />

    </div>
  );
};

export default App;
