import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className="btn btn-outline-light toggle-nav-btn"
      >
        {isNavVisible ? (
          <i className="fa-solid fa-angle-left fa-lg"></i>
        ) : (
          <i className="fa-solid fa-angle-right fa-lg"></i>
        )}
      </button>
      <nav
        className={`nav flex-column p-3 sidebar bg-dark text-light rounded ${
          isNavVisible ? "show" : "hide"
        }`}
      >
        <h4 className="text-center mb-4">Menú</h4>
        <Link to="/" className="nav-link text-light">
          <i className="fa-solid fa-house fa-lg me-2"></i>
          Panel
        </Link>
        <Link to="/createproduct" className="nav-link text-light">
          <i className="fa-solid fa-square-plus fa-lg me-2"></i>
          Crear Producto
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
