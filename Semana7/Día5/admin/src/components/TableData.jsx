// import "rutaarchivo.css"
import { Link } from "react-router-dom";
import { eliminarProducto } from "../services/productService";
import Swal from "sweetalert2";

const TableData = (props) => {
  const { datos, cabeceras, acciones } = props;

  const manejarEliminacion = async (id, nombre) => {
    try {
      const accion = await Swal.fire({
        title: `¿Desea eliminar ${nombre}?`,
        text: "Esta acción es irreversible",
        icon: "question",
        html:`<i class="fa-solid fa-spinner fa-2x fa-spin"></i>`,
        showCancelButton: true,
        cancelButtonText: 'No, no deseo eliminar',
        confirmButtonText: "Si, si deseo eliminar",
        confirmButtonColor: '#ff0000',
      });
    } catch (error) {}
  };

  return (
    // JSX no me permite utilizar palabras reservadas como for o class de JS
    // en el caso de class la alternativa es usar className en el JSX, for a htmlFor
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {cabeceras.map((texto, i) => (
            <th key={i}>{texto}</th>
          ))}
          {/* acciones será un booleano */}
          {acciones ? <th>Acciones</th> : null}
        </tr>
      </thead>
      <tbody>
        {/* recorrer datos... datos productos y cada producto tiene nombre, id, precio, descripcion */}
        {datos.map((fila, i) => (
          <tr key={i}>
            {/* recorrer por cada producto cada campo que indiquemos a partir de las cabeceras */}
            {cabeceras.map((cab, j) => (
              <td key={j}>{fila[cab]}</td>
            ))}
            {acciones ? (
              <td>
                <Link
                  className="btn btn-info btn-sm me-2"
                  to={`/editproduct/${fila.id}`}
                >
                  <i className="fa-solid fa-pencil"></i>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    manejarEliminacion(fila.id, fila.nombre);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
