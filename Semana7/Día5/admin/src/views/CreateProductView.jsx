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

  return (
    <div>CreateProductView</div>
  )
}

export default CreateProductView