import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Ecommerce</h1>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
