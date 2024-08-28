import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import ProductsView from "./views/ProductsView";
import DetailView from "./views/DetailView";
import CartView from "./views/CartView";
// components
import Navbar from "./components/ui/Navbar";

const App = () => {
  const { isDark } = useContext(ThemeContext);
  // console.log(isDark);

  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar />
      <div className="min-h-screen dark:bg-dark-background dark:text-dark-text">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/detail/:id" element={<DetailView />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
