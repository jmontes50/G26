import { useState, useEffect } from "react";

const Contador = () => {
  //const [estado, funcActEseEstado] = useState(valor_inicial);
  const [contador, setContador] = useState(0);

  //el useEffect suele estar justo antes del return
  //useEffect(función, [dependencias])
  //el useEffect por defecto siempre se va a ejecutar cuando cualquier estado cambie
  useEffect(() => {
    console.log(`El contador es: ${contador}`);
  })
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
