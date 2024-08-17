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
  } = producto;
  /**
   * nombre:'',
    descripcion:'',
    precio:0,
    imagen:'',
    detalles:'',
    'precio-oferta':0,
    cantidad:0,
    estrellas:0,
    categoria:''
   */
  return (
    <form className="row">
      <div className="col-12 col-md-6 mb-3">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" value={producto.nombre} />
      </div>
    </form>
  );
};

export default FormProduct;
