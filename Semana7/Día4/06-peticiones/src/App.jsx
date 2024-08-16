import { useState, useEffect } from 'react'

const App = () => {
  const [productos, setProductos] = useState([]);
  const URL = "https://66b797cd7f7b1c6d8f1c4b3d.mockapi.io/productos";

  useEffect(() => {
    fetch(URL)
    .then((response) => {
      return response.json(); //solamente tengo la respuesta más no la data
    })
    .then((data) => {
      console.log(data); //ya tenemos el JSON
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div>App</div>
  )
}

export default App