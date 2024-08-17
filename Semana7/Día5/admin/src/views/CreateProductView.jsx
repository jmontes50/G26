import { useState } from "react";

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
    const copiaProducto = {
      ...nuevoProducto,
      [name]: value
    }
    setNuevoProducto(copiaProducto);
  }

  const categorias = ["Ropa", "Accesorios", "Zapatos", "Hogar"];

  return (
    <div>CreateProductView</div>
  )
}

export default CreateProductView