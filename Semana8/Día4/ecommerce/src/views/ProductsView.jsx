import useGetAxios from "../hooks/useGetAxios"

const ProductsView = () => {
  const URL = "https://json-server-vercel-eosin-tau.vercel.app/products"
  const { data, loading, error } = useGetAxios(URL);
  
  console.log("data", data)
  console.log("loading", loading)
  console.log("error", error)

  return (
    <div>ProductsView</div>
  )
}

export default ProductsView