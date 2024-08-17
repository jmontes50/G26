const Widget = (props) => {
  const { color, icono, texto, numero } = props;

  return (
    <div
      className="d-flex flex-column border rounded p-3"
      style={{ backgroundColor: color }}
    >
      <i className={icono}></i>
      <span className="">{texto}</span>
      <span className="">{numero}</span>
    </div>
  );
};

export default Widget;
