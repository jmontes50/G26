const FormProduct = (props) => {
  // estamos desestructurando los props, producto es un objeto
  const {
    producto,
    manejarInputs,
    categorias,
    manejarSubmit,
    cargando,
    manejarArchivo,
    archivo
  } = props;
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

  let urlImagenTemporal = null;

  if(archivo){
    // esta URL ya viene un método que me permite crear una URL temporal para un archivo
    urlImagenTemporal = URL.createObjectURL(archivo);
    console.log("urlTemporal", urlImagenTemporal);
  }

  return (
    <form className="row" onSubmit={manejarSubmit}>
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
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      {/* estrellas */}
      <div className="col-12 col-md-6 mb-3">
        <label className="form-label" htmlFor="estrellas">
          Estrellas
        </label>
        <input
          className="form-control"
          type="number"
          id="estrellas"
          name="estrellas"
          value={estrellas}
          onChange={manejarInputs}
        />
      </div>
      {/* imagen */}
      <div className="col-12 mb-3">
        <label className="form-label" htmlFor="imagen">
          Imagen del producto
        </label>
        <input
          className="form-control"
          type="file"
          id="imagen"
          name="imagen"
          onChange={manejarArchivo}
          // multiple="multiple"
        />
      </div>
      {/* imagen actual */}
      {imagen ? (
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">Imagen actual del producto</label>
          <img src={imagen} alt={nombre} style={{ width: "300px", display:'block' }} />
        </div>
      ) : null}
      
      {/* imagen a subir */}
      {urlImagenTemporal ? (
        <div className="col-12 col-md-6 mb-3">
          <label className="form-label">Nueva imagen a subir del producto</label>
          <img src={urlImagenTemporal} alt={nombre} style={{ width: "300px", display:'block' }} />
        </div>
      ): null}

      <button type="submit" className="btn btn-primary" disabled={cargando}>
        {/* Guardar */}
        {cargando ? "Guardando..." : "Guardar"}
      </button>
    </form>
  );
};

export default FormProduct;
