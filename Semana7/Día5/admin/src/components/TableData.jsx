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
    </table>
  )
}

export default TableData