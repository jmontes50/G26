import { CountContextProvider } from "./contexts/CountContext";
import Titulo from "./components/Titulo";

const App = () => {
  return (
    <CountContextProvider>
      <div>
        Esto es App
        <hr />
        <Titulo>
          Hola!
          <p>Lorem ipsum dolor sit amet.</p>
        </Titulo>
      </div>
      {/* Rutas */}
      {/* {otro contexto} */}
      {/* Componentes */}
    </CountContextProvider>
  );
};

export default App;
