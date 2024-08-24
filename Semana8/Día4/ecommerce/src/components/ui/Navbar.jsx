import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="dark:bg-dark-background dark:text-dark-text">
      {/* container */}
      <div className="px-4 mx-auto lg:px-8 xl:max-w-7xl">
        <button className="btn btn-primary" onClick={toggleDarkMode}>
          Cambiar Tema {isDark ? "claro" : "oscuro"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
