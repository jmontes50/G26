import { useParams } from "react-router-dom";
import useGetAxios from "../hooks/useGetAxios";

const DetailView = () => {
  const { id } = useParams();
  console.log("id params", id);
  const URL = "https://json-server-vercel-eosin-tau.vercel.app/products";
  const { data, loading, error } = useGetAxios(`${URL}/${id}`);
  console.log("data detailview", data);

  return (
    <div className="container py-10">
      {/* <h1 className="mb-10 text-4xl text-center">Productos</h1> */}
      {data ? (
        <div className="flex">
          <div className="w-1/2 aspect-auto md:w-full">
            <img src={data.imagen} alt={data.nombre} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailView;
