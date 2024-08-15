const Formulario = () => {
  return (
    <>
      <h2>Formulario</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input 
          id="nombre" 
          type="text" 
          placeholder="Ingrese su nombre"
        />
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default Formulario;
