const FormProduct = (props) => {
  // estamos desestructurando los props, producto es un objeto
  const { producto, manejarInputs, categorias } = props;
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
      {/* cada label tiene que tener la clase form-label */}
      {/* cada input, text-area tiene que tener la clase form-control */}
      {/* nombre */}
      <div className="col-12 col-md-6 mb-3">
        <label className="form-label" htmlFor="nombre">
          Nombre
        </label>
        <input
          className="form-control"
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={manejarInputs}
        />
      </div>
      {/* cantidad */}
      <div className="col-12 col-md-6 mb-3">
        <label className="form-label" htmlFor="cantidad">
          Cantidad
        </label>
        <input
          className="form-control"
          type="number"
          id="cantidad"
          name="cantidad"
          value={cantidad}
          onChange={manejarInputs}
        />
      </div>
      {/* precio */}
      <div className="col-12 col-md-6 mb-3">
        <label className="form-label" htmlFor="precio">
          Precio
        </label>
        <input
          className="form-control"
          type="number"
          id="precio"
          name="precio"
          value={precio}
          onChange={manejarInputs}
        />
      </div>
      {/* precio-oferta */}
      <div className="col-12 col-md-6 mb-3">
        <label className="form-label" htmlFor="precio-oferta">
          Precio oferta
        </label>
        <input
          className="form-control"
          type="number"
          id="precio-oferta"
          name="precio-oferta"
          // considerar que aqui el nombre de la propiedad es 'precio-oferta'
          value={producto["precio-oferta"]}
          onChange={manejarInputs}
        />
      </div>
      {/* descripción */}
      <div className="col-12 mb-3">
        <label className="form-label" htmlFor="descripcion">
          Descripción
        </label>
        <textarea
          className="form-control"
          id="descripcion"
          name="descripcion"
          value={descripcion}
          onChange={manejarInputs}
        />
      </div>
      {/* detalles */}
      <div className="col-12 mb-3">
        <label className="form-label" htmlFor="detalles">
          Detalles
        </label>
        <textarea
          className="form-control"
          id="detalles"
          name="detalles"
          value={detalles}
          onChange={manejarInputs}
        />
      </div>
      {/* categoria */}
      <div className="col-12 col-md-6 mb-3">
        <label className="form-label" htmlFor="categoria">
          Categoría
        </label>
        <select
          value={categoria}
          className="form-select"
          name="categoria"
          id="categoria"
          onChange={manejarInputs}
        >
          {/* renderizado de listas de categorías para generar las opciones */}
          {categorias.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default FormProduct;
