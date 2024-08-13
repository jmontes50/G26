//Los props son Un argumento que puede recibir un componente en forma de objeto para utilizarlo
const Titulo = (props) => {
    console.log(props);
    return (
        <h1>Título de componente</h1>
    )
}

export default Titulo;