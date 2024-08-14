//Los props son Un argumento que puede recibir un componente en forma de objeto para utilizarlo
const Titulo = (props) => {
    console.log(props);
    const { texto , deportes } = props;

    return (
        <h1>{texto} - {deportes}</h1>
    )
}

export default Titulo;