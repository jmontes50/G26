import Boton from "./Boton";

const Parrafo = (props) => {
  console.log("props en parrafo", props);
  return (
    <div>
      {/* // el css que se aplica en style directamente, se aplica en forma de objeto
      //operador ternario - renderizado condicional */}
      <p style={props.importante === true ? {color:'red'} : {color:'blue'}}>
        Texto de introducción: {props.contenido}
      </p>
      <span>Deseas saber más? </span>
      <Boton />
    </div>
  )
}

export default Parrafo;