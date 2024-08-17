//que estos estilos lo podemos utilizar aquí y NO van afectar al resto de componentes. A comparacion de cuando importamos directamente un archivo común de css
import estilos from "./styles/Widget.module.css";

const Widget = (props) => {
  const { color, icono, texto, numero } = props;

  // console.log(estilos)

  return (
    <div
      className={`d-flex flex-column border rounded p-3 gap-3 ${estilos["card-widget"]}`}
      style={{ backgroundColor: color }}
    >
      <i className={`${icono} fa-4x mt-2`}></i>
      <span className={estilos["texto-widget"]}>{texto}</span>
      <span className={estilos["numero-widget"]}>{numero}</span>
    </div>
  );
};

export default Widget;
