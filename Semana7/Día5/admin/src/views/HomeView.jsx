//vistas utilizaran los servicios para hacer las operaciones
import { useState, useEffect } from 'react';
import { obtenerProductos } from '../services/productService';
import TableData from '../components/TableData';

const HomeView = () => {
  const [productos, setProductos] = useState([]);

  const cabeceras = ["nombre", "categoria", "cantidad", "precio", "precio-oferta"];

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
    <div>
      <TableData cabeceras={cabeceras} datos={productos} />
    </div>
  )
}

export default HomeView