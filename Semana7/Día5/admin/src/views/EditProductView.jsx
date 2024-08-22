import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoPorId, editarProducto } from "../services/productService";
import { subirArchivo } from "../services/storageService";
import Loading from "../components/Loading";
import FormProduct from "../components/FormProduct";

const categorias = ["Ropa", "Accesorios", "Zapatos", "Hogar"];

const EditProductView = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [archivo, setArchivo] = useState(null);

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
  };

  const manejarArchivo = (e) => {
    setArchivo(e.target.files[0]);
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      setCargando(true);
      //si es que el estado archivo tiene cargado algo, subiremos la nueva Imagen si no, dejamos la imagen tal cuál.
      let copiaProducto = { ...producto };
      if(archivo){ //si es truthy
        const urlImagen = await subirArchivo(archivo);
        copiaProducto.imagen = urlImagen;
      }
      await editarProducto(id, copiaProducto);
      setCargando(false);

    } catch (error) {
      console.log(error)
    }
  };

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
    };
    getProduct();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Editar Producto</h2>
      {cargando ? <Loading /> : null}
      {/* truthy & falsy */}
      {producto ? (
        <FormProduct
          producto={producto}
          manejarInputs={manejarInputs}
          categorias={categorias}
          manejarSubmit={manejarSubmit}
          manejarArchivo={manejarArchivo}
          cargando={cargando}
        />
      ) : null}
    </div>
  );
};

export default EditProductView;
