import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../app/data/dataSlice';

const List = () => {

  const estado = useSelector((state) => state.users.listUsers);

  console.log("estado", estado)
  
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchUsers())
  }, []);
  return (
    <div>List</div>
  )
}

export default List