import { useParams } from "react-router-dom";
import useGetAxios from "../hooks/useGetAxios";

const DetailView = () => {
  const { id } = useParams();
  console.log("id params", id);
  const URL = 'https://json-server-vercel-eosin-tau.vercel.app/products';
  const { data, loading, error } = useGetAxios(`${URL}/${id}`)
  console.log("data detailview", data);
  
  return (
    <div>DetailView</div>
  )
}

export default DetailView