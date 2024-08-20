import { useState } from "react";
import FormProduct from "../components/FormProduct";
import { crearProducto } from "../services/productService";

const categorias = ["Ropa", "Accesorios", "Zapatos", "Hogar"];

const CreateProductView = () => {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre:'',
    descripcion:'',
    precio:0,
    // imagen:'',
    detalles:'',
    'precio-oferta':0,
    cantidad:0,
    estrellas:0,
    categoria:categorias[0]
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

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearProducto(nuevoProducto);
      alert('Producto creado!')
    } catch (error) {
      alert('Error, revise la consola');
      console.log(error)
    }
  }

  // const categorias = ["Ropa", "Accesorios", "Zapatos", "Hogar"];

  return (
    <div>
      <h2>Crear Producto</h2>
      <FormProduct producto={nuevoProducto} manejarInputs={manejarInputs} categorias={categorias} />
    </div>
  )
}

export default CreateProductView