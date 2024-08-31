import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  
  const { user } = useContext(AuthContext);
  //si el usuario no esta Logueado
  if(user === null){
    return <Navigate to='/login' replace={true} />
  }

  //outlet va a ser el equivalente a children pero en forma de componente
  //<Titulo><p>va a renderizar el contenido del componente</p></Titulo>
  return children;
}

export default ProtectedRoute