import { useState } from "react";

const Contador = () => {
  //const [estado, funcActEseEstado] = useState(valor_inicial);
  const [contador, setContador] = useState(0);
  return (
    <>
      <h2>Contador es: {contador}</h2>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Incrementar
      </button>
    </>
  );
};

export default Contador;
