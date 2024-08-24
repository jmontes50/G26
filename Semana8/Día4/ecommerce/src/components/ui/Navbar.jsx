import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="dark:bg-dark-background dark:text-dark-text">
      {/* container */}
      <div className="container">
        <div className="flex justify-between py-4">
          {/* logo */}
          <div className="flex items-center">Logo</div>
          {/* ul */}
          <ul className="flex items-center justify-center gap-10">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Carrito</li>
          </ul>
          {/* div con otros items */}
          <div className="flex items-center justify-end gap-4">
            <button className="btn btn-primary" onClick={toggleDarkMode}>
              {isDark ? (
                <i className="fa-regular fa-sun"></i>
              ) : (
                <i className="fa-regular fa-moon"></i>
              )}
            </button>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
