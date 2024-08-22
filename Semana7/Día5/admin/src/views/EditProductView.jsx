import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoPorId } from "../services/productService";
import Loading from "../components/Loading";
import FormProduct from "../components/FormProduct";

const categorias = ["Ropa", "Accesorios", "Zapatos", "Hogar"];

const EditProductView = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(false);

  const { id } = useParams();
  // console.log("id editproductview", id);

  const manejarInputs = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    const copiaProducto = {
      ...producto,
      [name]: value,
    };
    setProducto(copiaProducto);
  }

  const manejarArchivo = () => {

  }

  const manejarSubmit = () => {

  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        setCargando(true);
        const productoObtenido = await obtenerProductoPorId(id);
        setProducto(productoObtenido);
        setCargando(false);
      } catch (error) {
        alert("Ocurrio un error intente de nuevo");
        setCargando(false);
      }
    }
    getProduct();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Editar Producto</h2>
      {cargando ? <Loading /> : null}
      <FormProduct
        producto={producto}
        manejarInputs={manejarInputs}
        categorias={categorias}
        manejarSubmit={manejarSubmit}
        manejarArchivo={manejarArchivo}
        cargando={cargando}
      />
    </div>
  )
}

export default EditProductView