import { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import ProductsView from "./views/ProductsView";
import DetailView from "./views/DetailView";
import CartView from "./views/CartViewView";
// components
import Navbar from "./components/ui/Navbar";

const App = () => {
  const { isDark } = useContext(ThemeContext);
  // console.log(isDark);

  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar />
      <h1 className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">Ecommerce</h1>
      <Link to="/login">Ir a Login</Link>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/detail/:id" element={<DetailView />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </div>
  );
};

export default App;
