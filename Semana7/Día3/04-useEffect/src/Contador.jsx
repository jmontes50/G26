import { useState, useEffect } from "react";

const Contador = () => {
  //const [estado, funcActEseEstado] = useState(valor_inicial);
  const [contador, setContador] = useState(0);
  const [valor, setValor] = useState('');

  //el useEffect suele estar justo antes del return
  //useEffect(función, [dependencias])
  //el useEffect por defecto siempre se va a ejecutar cuando cualquier estado ó dependencia cambie y en el montaje del componente
  useEffect(() => {
    //contador
    console.log(`El contador es: ${contador}`);
    //en base a las dependencias que tenga el useEffect se va a ejecutar su Efecto
  },[contador]);

  useEffect(() => {
    //valor
    console.log(`El estado del input es: ${valor}`);
  }, [valor]);

  //si tenemos una useEffect con las dependencias vacias, sin ninguna, este efecto solamente se ejecutara en el montaje del componente
  useEffect(() => {
    console.log("Holaaaaaa")
  }, []);

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
      <hr />
      <input 
        type="text" 
        value={valor}
        onChange={(e) => {setValor(e.target.value)}}
      />
    </>
  );
};

export default Contador;
