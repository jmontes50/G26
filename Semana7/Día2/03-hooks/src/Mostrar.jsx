//Un componente también se volverá a dibujar/renderizar cuando reciba nuevos props
const Mostrar = (props) => {
    // console.log("props de Mostrar:", props);
    return (
        <div>Mostrar contador: {props.contador}</div>
    )
}

export default Mostrar