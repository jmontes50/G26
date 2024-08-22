import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoPorId } from "../services/productService";
import Loading from "../components/Loading";

const EditProductView = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(false);

  const { id } = useParams();
  // console.log("id editproductview", id);

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
    </div>
  )
}

export default EditProductView