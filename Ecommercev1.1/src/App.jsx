import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { ToastContainer } from "react-toastify";
import Footer from "./components/ui/Footer"
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import ProductsView from "./views/ProductsView";
import DetailView from "./views/DetailView";
import CartView from "./views/CartView";
import RegisterView from "./views/RegisterView";
// components
import Navbar from "./components/ui/Navbar";
//css
import 'react-toastify/dist/ReactToastify.min.css';

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
          <Route path="/register" element={<RegisterView />} />
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
