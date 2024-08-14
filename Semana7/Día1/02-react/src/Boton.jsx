const Boton = (props) => {
    console.log("Props del Botón:", props);
    //props.abrirMensaje aquí seria la referencia de abrirAlerta en App.jsx

    const manejarClick = () => {
        props.abrirMensaje("Deseas ver más?")
    }

    //Eventos
    return (
        <button onClick={manejarClick}>
            Click!!!
        </button>
    )
}

export default Boton;