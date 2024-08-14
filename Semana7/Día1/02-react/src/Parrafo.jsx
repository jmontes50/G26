const Parrafo = (props) => {
  console.log("props en parrafo", props);
  return (
    <p>
      Texto de introducción: {props.contenido}
    </p>
  )
}

export default Parrafo;