import { useParams } from "react-router-dom";
import useGetAxios from "../hooks/useGetAxios";
import Stars from "../components/ui/Stars";

const DetailView = () => {
  const { id } = useParams();
  console.log("id params", id);
  const URL = "https://json-server-vercel-eosin-tau.vercel.app/products";
  const { data, loading, error } = useGetAxios(`${URL}/${id}`);
  console.log("data detailview", data);

  return (
    <div className="container py-10">
      {data ? (
        <>
          <div className="flex gap-10 mb-5">
            {/* imagen */}
            <div className="w-1/2 aspect-auto md:w-full">
              <img src={data.imagen} alt={data.nombre} />
            </div>
            {/* resto de la data */}
            <div className="w-1/2 md:w-full">
              <h1 className="mb-5 text-3xl font-semibold">{data.nombre}</h1>
              <div className="mb-5">
                <Stars rating={data.estrellas} />
              </div>
              <div className="mb-5 text-xl">
                <span className="me-2">{`S/ ${data.precio_oferta.toFixed(
                  2
                )}`}</span>
                <span className="line-through text-slate-600">{`S/ ${data.precio.toFixed(
                  2
                )}`}</span>
              </div>
              <p className="">{data.descripcion}</p>
            </div>
            {/* detalles */}
          </div>

          <div className="pt-5 border-t-2 border-slate-300">
            <h4 className="mb-5 text-xl font-semibold">Detalles</h4>
            <p>{data.detalles}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DetailView;
