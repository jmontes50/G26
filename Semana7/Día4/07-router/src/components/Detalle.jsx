import { useParams } from "react-router-dom"

const Detalle = () => {
  //recibir la información como un objeto
  const parametros = useParams();
  console.log("parametros en la url en detalle:", parametros);
  
  return (
    <div>
      <h2>
        <code>
          Detalle
        </code>
      </h2>
      <p>Contenido del detalle</p>
    </div>
  )
}

export default Detalle