import { useState } from "react";
import FormProduct from "../components/FormProduct";
import { crearProducto } from "../services/productService";
import { subirArchivo } from "../services/storageService";

const categorias = ["Ropa", "Accesorios", "Zapatos", "Hogar"];

const CreateProductView = () => {
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    imagen:'',
    detalles: "",
    "precio-oferta": 0,
    cantidad: 0,
    estrellas: 0,
    categoria: categorias[0],
  });

  const [cargando, setCargando] = useState(false);

  //aqui vamos a manejar el archivo jpg. png webp en si
  const [archivo, setArchivo] = useState(null);

  //manejar el archivo jpg png con el input
  const manejarArchivo = (e) => {
    //evento
    //target - objetivo de donde sale el evento
    // console.log("viendo evento archivo", e.target.files[0]);
    setArchivo(e.target.files[0]);
  }

  const manejarInputs = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    const copiaProducto = {
      ...nuevoProducto,
      [name]: value,
    };
    setNuevoProducto(copiaProducto);
  };

  const manejarSubmit = async (e) => {
    e.preventDefault(); //va a prevenir el evento por defecto del form
    try {
      //cuando comience la carga indicaremos que esta cargando...
      setCargando(true);
      const urlImagen = await subirArchivo(archivo);
      //estamos haciendo una copia de nuevoProducto, y le agregamos el campo imagen con la url de la imagen ya subida
      await crearProducto({ ...nuevoProducto, imagen: urlImagen });
      //cuando termine de crear el producto
      setCargando(false);
      alert("Producto creado!");
    } catch (error) {
      alert("Error, revise la consola");
      console.log(error);
    }
  };

  // const categorias = ["Ropa", "Accesorios", "Zapatos", "Hogar"];

  return (
    <div>
      <h2>Crear Producto</h2>
      <FormProduct
        producto={nuevoProducto}
        manejarInputs={manejarInputs}
        categorias={categorias}
        manejarSubmit={manejarSubmit}
        manejarArchivo={manejarArchivo}
        cargando={cargando}
      />
    </div>
  );
};

export default CreateProductView;
