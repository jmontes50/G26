const Cambiar = (props) => {
  // console.log("Props de cambiar:", props);
  const manejarClick = () => {
    props.setContador(props.contador + 100);
  }
  
  return (
    <button onClick={manejarClick}>
        Cambiar
    </button>
  )
}

export default Cambiar