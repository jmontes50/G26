const Titulo = (props) => {
  console.log(props)
  const { children } = props;
  return (
    <div>
        <h1>Titulo</h1>
        {children}
    </div>
  )
}

export default Titulo