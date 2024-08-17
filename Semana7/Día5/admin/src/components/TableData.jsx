// import "rutaarchivo.css"

const TableData = (props) => {
  const { datos, cabeceras } = props;

  return (
    // JSX no me permite utilizar palabras reservadas como for o class de JS
    // en el caso de class la alternativa es usar className en el JSX, for a htmlFor
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {cabeceras.map((texto, i) => (
            <th key={i}>{texto}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* recorrer datos... datos productos y cada producto tiene nombre, id, precio, descripcion */}
        {datos.map((fila, i) => (
          <tr key={i}>
            {/* recorrer por cada producto cada campo que indiquemos a partir de las cabeceras */}
            {cabeceras.map((cab, j) => (
              <td key={j}>{fila[cab]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableData