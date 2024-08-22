//vamos a incluir funciones que nos permitan trabajar con mockapi
import axios from "axios";

const URL = import.meta.env.VITE_API_BASE;
// console.log("URL con env", URL)

//GET
const obtenerProductos = async () => {
  try {
    const respuesta = await axios.get(`${URL}/productos`);
    // console.log("get axios", respuesta);
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
const obtenerProductoPorId = async (id) => {
  try {
    const respuesta = await axios.get(`${URL}/productos/${id}`);
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}

//PUT - Actualizar
const editarProducto = async (id, productoEditado) => {
  try {
    // vamos a utilizar el verbo put http mediante el método put
    const respuesta = await axios.put(`${URL}/productos/${id}`, productoEditado)
    return respuesta.data;
  } catch (error) {
    throw error;
  }
}
//DELETE - Borrar

export {
  obtenerProductos,
  crearProducto,
  obtenerProductoPorId,
  editarProducto
}