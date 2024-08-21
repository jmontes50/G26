import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import CreateProductView from "./views/CreateProductView";
import "./App.css"; // Importa el CSS personalizado aquí

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Navigation />

        <div className="container-fluid px-5 py-3" >
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
