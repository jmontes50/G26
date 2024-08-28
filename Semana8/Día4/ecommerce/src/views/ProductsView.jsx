import { useState } from "react";
import useGetAxios from "../hooks/useGetAxios"

const ProductsView = () => {
  const [page, setPage] = useState(1);
  const URL = `https://json-server-vercel-eosin-tau.vercel.app/products?_page=${page}`
  const { data, loading, error } = useGetAxios(URL);

  // console.log(data)
  // console.log("loading", loading)
  // console.log("error", error)

  return (
    <div>ProductsView
      <button onClick={() => {setPage(page + 1)}}>Ver más</button>
    </div>
  )
}

export default ProductsView