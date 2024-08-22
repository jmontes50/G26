import { useParams } from "react-router-dom";

const EditProductView = () => {
  const { id } = useParams();
  // console.log("id editproductview", id);

  return (
    <div>EditProductView</div>
  )
}

export default EditProductView