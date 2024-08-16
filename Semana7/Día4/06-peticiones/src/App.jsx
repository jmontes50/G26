import { useState, useEffect } from 'react'

const App = () => {
  const [productos, setProductos] = useState([]);
  const URL = "https://66b797cd7f7b1c6d8f1c4b3d.mockapi.io/productos";

  //Podemos utilizar async/await en un useEffect pero no podemos ponerlo directamente en la función callback que recibe useEffect---> ej: useEffect(async () => .... ✖️)
  useEffect(() => {
    /*
    fetch(URL)
    .then((response) => {
      console.log("response", response); //Guía de remisión
      return response.json(); //solamente tengo la respuesta más no la data
    })
    .then((data) => {
      console.log(data); //ya tenemos el JSON, ya tenemos el producto
      setProductos(data);
    })
    .catch((err) => {
      console.log(err);
    });
    */
   //si queremos usar async await tenemos que crear una función aparte dentro del useEffect
    const obtenerDatos = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setProductos(data)
      } catch (error) {
        console.log(error);
      }
    }
    obtenerDatos();
  }, []);
  return (
    <div>
      {productos.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.nombre}</h2>
          <p>{prod.descripcion}</p>
          <h4>{prod.price}</h4>
        </div>
      ))}
    </div>
  )
}

export default App