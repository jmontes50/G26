import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoPorId } from "../services/productService";

const EditProductView = () => {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();
  // console.log("id editproductview", id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productoObtenido = await obtenerProductoPorId(id);
        console.log("producto obtenido: ", productoObtenido)
      } catch (error) {
        alert("Ocurrio un error intente de nuevo");
      }
    }
    getProduct();
  }, []);

  return (
    <div>EditProductView</div>
  )
}

export default EditProductView