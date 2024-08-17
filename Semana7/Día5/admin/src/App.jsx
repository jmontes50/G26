import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import CreateProductView from "./views/CreateProductView";
//import "./assets/tuCSS.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="col-3">
          {/* Navegación */}
          <Navigation />
          {/* para que cualquier componente Link de react-router-dom funcione, tiene que estar dentro del browser router */}
        </div>
        <div className="col-9 pt-3">
          {/* Rutas van a ir aquí, para que se dibujen solo en esta parte */}
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/createproduct" element={<CreateProductView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
