import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Lista from "./components/Lista";
import Detalle from "./components/Detalle";

const App = () => {
  return (
    // va a servir de contexto, para poder utilizar todas las caracteristicas de react-router
    <BrowserRouter>
      {/* aquí podemos seguir definiendo JSX */}
      <h1>Aplicación</h1>
      <div>
        {/* necesitamos un componente que indique que rutas se van a definir */}
        <Routes>
          {/* Rutas especificas, path que va a ser la ruta y element que va a ser el JSX ó componente a mostrar */}
          <Route path='/' element={<Inicio />} />
          <Route path='/lista' element={<Lista />} />
          {/* al colocar :variable dentro de una ruta, me permite recibir información desde la url */}
          <Route path='/detalle/:id' element={<Detalle />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App