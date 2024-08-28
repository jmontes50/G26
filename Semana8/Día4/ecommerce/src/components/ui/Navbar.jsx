import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { isDark, toggleDarkMode } = useContext(ThemeContext);

  const handleOpen = () => {
    setOpen(!open);
  }

  return (
    <nav className="dark:bg-dark-background dark:text-dark-text">
      {/* container */}
      <div className="container">
        <div className="flex justify-between py-4">
          {/* logo */}
          <div className="flex items-center">Logo</div>
          {/* ul */}
          <ul className="items-center justify-center hidden gap-10 lg:flex">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Carrito</li>
          </ul>
          {/* div con otros items */}
          <div className="items-center justify-end hidden gap-4 lg:flex">
            <button className="btn btn-secondary" onClick={toggleDarkMode}>
              {isDark ? (
                <i className="fa-regular fa-sun"></i>
              ) : (
                <i className="fa-regular fa-moon"></i>
              )}
            </button>
            <button className="btn btn-primary">Login</button>
          </div>
          {/* responsive */}
          <div className="lg:hidden">
            <button 
              className="btn btn-primary"
              onClick={handleOpen}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        {/* mobile */}
        <Transition
          show={open}
          // le vamos a agregar como deseamos que se comporte
          enter="transition-all duration-300 ease-in-out"
          enterFrom="max-h-0 opacity-0"
          enterTo="max-h-screen opacity-100"
          leave="transition-all duration-300 ease-in-out"
          leaveFrom="max-h-screen opacity-100"
          leaveTo="max-h-0 opacity-0"
        >
          <div className="overflow-hidden lg:hidden">
            <nav className="flex flex-col gap-2 py-4 border-t border-gray-200">
              <a className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
                Inicio
              </a>
            </nav>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
