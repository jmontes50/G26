import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
// components
import Navbar from "./components/ui/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeContextProvider>
          <div className="dark">
            <Navbar />
            <h1 className="">Ecommerce</h1>
            <Link to="/login">Ir a Login</Link>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/login" element={<LoginView />} />
            </Routes>
          </div>
        </ThemeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
