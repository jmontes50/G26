import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";

const CambiarContador = () => {
  const { contador, setContador } = useContext(CountContext);

  return (
    <div>
      <h3>CambiarContador</h3>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
};

export default CambiarContador;
