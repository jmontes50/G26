import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="d-flex flex-column gap-2">
      <Link to="/">
        <i className="fa-solid fa-house fa-2x me-2"></i>
        Panel
      </Link>
      <Link to="/createproduct">
        <i className="fa-solid fa-square-plus fa-2x me-2"></i>
        Crear Producto
      </Link>
    </nav>
  );
};

export default Navigation;
