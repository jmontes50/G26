import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="dark:bg-dark-background dark:text-dark-text">
      {/* container */}
      <div className="px-4 mx-auto lg:px-8 xl:max-w-7xl">
        <div className="flex justify-between py-4">
          {/* logo */}
          <div className="flex items-center">
            Logo
          </div>
          {/* ul */}
          <ul className="flex items-center justify-center gap-10">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Carrito</li>
          </ul>
          {/* div con otros items */}
          
        </div>
        <button className="btn btn-primary" onClick={toggleDarkMode}>
          Cambiar Tema {isDark ? "claro" : "oscuro"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
