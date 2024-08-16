import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path='/' element={<h1>Inicio</h1>} />
          <Route path='/lista' element={<h1>Lista</h1>} />
          <Route path='/detalle' element={<h1>Detalle</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App