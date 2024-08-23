import { useState, createContext } from "react";

//creando el contexto y dentro de ese contexto estará el provider, pero esta referencia va a ser vital para que cuando se obtenga los datos se sepa a quien nos estamos refiriendo 
const CountContext = createContext();

//este va a ser un componente por el que se compartira lo que deseemos
const CountContextProvider = ({ children }) => {
  const [contador, setContador] = useState(0);

  //lo que deseemos compartir ira en un prop llamado value
  return (
    <CountContext.Provider
    // value={{ contador: contador }} 
      value={{ contador, setContador }}
    >
      { children }
    </CountContext.Provider>
  )
}

export {
  CountContext,
  CountContextProvider
}