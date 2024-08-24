import { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
// components
import Navbar from "./components/ui/Navbar";

const App = () => {
  const { isDark } = useContext(ThemeContext);
  console.log(isDark);

  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar />
      <h1 className="dark:bg-dark-background text-light-text">Ecommerce</h1>
      <Link to="/login">Ir a Login</Link>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
      </Routes>
    </div>
  );
};

export default App;
