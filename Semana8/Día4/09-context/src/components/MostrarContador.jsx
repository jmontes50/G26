//useContext para poder 'consumir' el contexto
import { useContext } from 'react';
//y la referencia del contexto porque podemos tener varios
import { CountContext } from '../contexts/CountContext';

const MostrarContador = () => {
  const datos = useContext(CountContext);
  console.log(datos);
  return (
    <div>MostrarContador</div>
  )
}

export default MostrarContador