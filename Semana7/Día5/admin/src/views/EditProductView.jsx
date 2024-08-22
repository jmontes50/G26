import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoPorId } from "../services/productService";

const EditProductView = () => {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();
  // console.log("id editproductview", id);

  useEffect(() => {

  }, []);

  return (
    <div>EditProductView</div>
  )
}

export default EditProductView