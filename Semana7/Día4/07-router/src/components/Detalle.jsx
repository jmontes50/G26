import { useParams } from "react-router-dom"

const Detalle = () => {
  //recibir la información como un objeto
  // const parametros = useParams();
  // console.log("parametros en la url en detalle:", parametros);
  const { id } = useParams();
  
  
  return (
    <div>
      <h2>
        <code>
          El id de la URL es: {id}
        </code>
      </h2>
      <p>Contenido del detalle</p>
    </div>
  )
}

export default Detalle