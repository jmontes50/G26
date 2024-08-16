//Link va a funcionar como una especie de hipervínculo, pero en reemplazo del href tendrá un to
import { Link } from "react-router-dom"

const Inicio = () => {
  return (
    <div>
      <h2>Inicio</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita animi quaerat, at suscipit repellat eaque officia eos laborum debitis sapiente, in placeat nemo fuga ipsum et error. Dolor, ad!</p>
      <Link to="/lista">Ir a Lista</Link>
    </div>
  )
}

export default Inicio