const FormProduct = (props) => {
  // estamos desestructurando los props, producto es un objeto
  const { producto, manejarInputs } = props;
  // desestructurar producto
  const {
    nombre,
    descripcion,
    precio,
    imagen,
    detalles,
    cantidad,
    estrellas,
    categoria,
    //precio-oferta
  } = producto;

  return (
    <form className="row">
      {/* nombre */}
      <div className="col-12 col-md-6 mb-3">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={manejarInputs}
        />
      </div>
      {/* cantidad */}
      <div className="col-12 col-md-6 mb-3">
        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          value={cantidad}
          onChange={manejarInputs}
        />
      </div>
      {/* precio */}
      <div className="col-12 col-md-6 mb-3">
        <label htmlFor="precio">Precio</label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={precio}
          onChange={manejarInputs}
        />
      </div>
      {/* precio-oferta */}
      <div className="col-12 col-md-6 mb-3">
        <label htmlFor="precio-oferta">Precio oferta</label>
        <input
          type="number"
          id="precio-oferta"
          name="precio-oferta"
          // considerar que aqui el nombre de la propiedad es 'precio-oferta'
          value={producto['precio-oferta']}
          onChange={manejarInputs}
        />
      </div>
    </form>
  );
};

export default FormProduct;
