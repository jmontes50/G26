//vistas utilizaran los servicios para hacer las operaciones
import { useState, useEffect } from "react";
import { obtenerProductos, eliminarProducto } from "../services/productService";
import TableData from "../components/TableData";
import Widget from "../components/Widget";
import Swal from "sweetalert2";

const HomeView = () => {
  const [productos, setProductos] = useState([]);

  const cabeceras = [
    "nombre",
    "categoria",
    "cantidad",
    "precio",
    "precio-oferta",
  ];

  const infoWidgets = [
    {
      icono: "fa-solid fa-gift", //en vez de utilizar todo el html de font-awesome solo usamos sus clases
      texto: "Productos",
      numero: 100,
      color: "#C1DEFE",
    },
    {
      icono: "fa-solid fa-users", //<i class="fa-solid fa-users"></i>
      texto: "Usuarios",
      numero: 400,
      color: "#FCF4D7",
    },
    {
      icono: "fa-solid fa-plane-departure",
      texto: "Ordenes",
      numero: 20,
      color: "#EFE0FD",
    },
  ];
  
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
      console.log(accion)
      if(accion.isConfirmed){
        await eliminarProducto(id);
        Swal.fire({
          title:`Se eliminó ${nombre}`,
          text:"La operación se realizó con éxito",
          icon:"success"
        })
      }
    } catch (error) {
      Swal.fire({
        title:`Ocurrio un error`,
        text:"La operación tuvo un error",
        icon:"error"
      });
    }
  };

  useEffect(() => {
    const getProductos = async () => {
      try {
        const productosObtenidos = await obtenerProductos();
        setProductos(productosObtenidos);
      } catch (error) {
        alert("Ocurrio un error");
        console.log(error);
      }
    };
    getProductos();
  }, []);

  return (
    <>
      <div className="mb-3">
        <h2>
          <span className="badge text-bg-primary me-2">
            <i className="fa-solid fa-gauge-simple-high"></i>
          </span>
          Panel
        </h2>
        <div className="d-flex gap-4">
          {infoWidgets.map((caja, i) => (
            <Widget
              key={i}
              color={caja.color}
              texto={caja.texto}
              numero={caja.numero}
              icono={caja.icono}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>
          <span className="badge text-bg-primary me-2">
            <i className="fa-regular fa-rectangle-list"></i>
          </span>
          Listado de Productos
        </h2>
        <TableData 
          cabeceras={cabeceras} 
          datos={productos} 
          acciones={true}
          manejarEliminacion={manejarEliminacion}
        />
      </div>
    </>
  );
};

export default HomeView;
