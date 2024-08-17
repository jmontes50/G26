//vamos a incluir funciones que nos permitan trabajar con mockapi
import axios from "axios";

const URL = "https://66b797cd7f7b1c6d8f1c4b3d.mockapi.io";

//GET
const obtenerProductos = async () => {
  try {
    const respuesta = await axios.get(`${URL}/productos`);
    console.log("get axios", respuesta);
    if(respuesta.status === 200) {
      return respuesta.data;
    }
    throw new Error('Error al obtener productos');
  } catch (error) {
    throw error;
  }
}

//POST - Crear
const crearProducto = async (producto) => {
  //vamos a confiar que las propiedades de producto son lo que me pide el backend
  try {
    const respuesta = await axios.post(`${URL}/productos`, producto);
    console.log("post axios", respuesta);
    return respuesta.data;
  } catch (error) {
    throw error;
  }

}

//GET POR ID
//PUT - Actualizar
//DELETE - Borrar

export {
  obtenerProductos,
  crearProducto
}