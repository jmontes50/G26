const ProductCard = ({ product }) => {
  const { id, nombre, descripcion, precio, precio_oferta, imagen } = product;
  return (
    <div className="flex flex-col gap-0.5 max-w-lg">
      {/* contedor imagen */}
      <div className="object-cover w-100 h-96">
        <img src={imagen} alt={`foto ${nombre}`} />
      </div>
      <h4 className="font-semibold">{nombre}</h4>
      <p>{descripcion}</p>
      <div className="flex gap-2">
        <span className="font-semibold">S/ {precio_oferta.toFixed(2)}</span>
        <span className="text-gray-500 line-through">S/ {precio.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default ProductCard