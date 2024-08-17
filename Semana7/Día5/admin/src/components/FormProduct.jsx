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
    </form>
  );
};

export default FormProduct;
