//Un componente también se volverá a dibujar/renderizar cuando reciba nuevos props
const Mostrar = (props) => {
  // console.log("props de Mostrar:", props);
  const porUnMillon = props.contador * 1000000;

  return (
    <>
      <div>Mostrar contador: {props.contador}</div>
      <div>Por un millón: {porUnMillon}</div>
    </>
  );
};

export default Mostrar;
