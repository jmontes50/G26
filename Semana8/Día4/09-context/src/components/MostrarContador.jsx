//useContext para poder 'consumir' el contexto
import { useContext } from "react";
//y la referencia del contexto porque podemos tener varios
import { CountContext } from "../contexts/CountContext";

const MostrarContador = () => {
  const { contador } = useContext(CountContext);
  // console.log(datos);
  return (
    <div>
      <h3>Mostrar Contador</h3>
      <p>El contador es: {contador}</p>
    </div>
  );
};

export default MostrarContador;
