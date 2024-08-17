//vistas utilizaran los servicios para hacer las operaciones
import { useState, useEffect } from 'react';
import { obtenerProductos } from '../services/productService';

const HomeView = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {
        const productosObtenidos = await obtenerProductos();
        setProductos(productosObtenidos);
      } catch (error) {
        alert("Ocurrio un error");
        console.log(error);
      }
    }
    getProductos();
  }, []);

  return (
    <div>HomeView</div>
  )
}

export default HomeView