import { useState } from "react";
import FormProduct from "../components/FormProduct";

const CreateProductView = () => {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre:'',
    descripcion:'',
    precio:0,
    imagen:'',
    detalles:'',
    'precio-oferta':0,
    cantidad:0,
    estrellas:0,
    categoria:''
  })

  const manejarInputs = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    const copiaProducto = {
      ...nuevoProducto,
      [name]: value
    }
    setNuevoProducto(copiaProducto);
  }

  const categorias = ["Ropa", "Accesorios", "Zapatos", "Hogar"];

  return (
    <div>
      <h2>Crear Producto</h2>
      <FormProduct producto={nuevoProducto} manejarInputs={manejarInputs} categorias={categorias} />
    </div>
  )
}

export default CreateProductView