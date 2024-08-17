import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
//import "./assets/tuCSS.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className="row">
        <div className="col-3">
          {/* Navegación */}
        </div>
        <div className="col-9 pt-3">
          {/* Rutas van a ir aquí, para que se dibujen solo en esta parte */}
          <Routes>
            <Route path="/" element={<HomeView />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
