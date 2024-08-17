//vistas utilizaran los servicios para hacer las operaciones
import { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productService";
import TableData from "../components/TableData";
import Widget from "../components/Widget";

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
      color: "#C1DEFE"
    },
    {
      icono: "fa-solid fa-users", //<i class="fa-solid fa-users"></i>
      texto: "Usuarios",
      numero: 400,
      color: "#FCF4D7"
    },
    {
      icono: "fa-solid fa-plane-departure",
      texto: "Ordenes",
      numero: 20,
      color:"#EFE0FD"
    },
  ];

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
      </div>
      <div>
        <h2>
          <span className="badge text-bg-primary me-2">
            <i className="fa-regular fa-rectangle-list"></i>
          </span>
          Listado de Productos
        </h2>
        <TableData cabeceras={cabeceras} datos={productos} />
      </div>
    </>
  );
};

export default HomeView;
