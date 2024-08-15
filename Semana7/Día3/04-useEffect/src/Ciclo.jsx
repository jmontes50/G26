import {useState, useEffect} from 'react'

const Ciclo = () => {
  const [producto, setProducto] = useState({});

  console.log('1. yo estoy dentro del componente');

  useEffect(() => {
    console.log('3. yo estoy dentro del useEffect');
    setTimeout(() => {
      setProducto({ nombre: 'Adobo' })
    }, 4000);

  }, [producto]);

  return (
    <div>
      {console.log('2. Yo estoy en el return')}
      Hola!
    </div>
  )
}

export default Ciclo