import { CountContextProvider } from "./contexts/CountContext";
import Titulo from "./components/Titulo";
import MostrarContador from "./components/MostrarContador";

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
        <hr />
        <MostrarContador />
      </div>
      {/* Rutas */}
      {/* {otro contexto} */}
      {/* Componentes */}
    </CountContextProvider>
  );
};

export default App;
