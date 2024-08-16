const DivTarea = (props) => {
  const {tarea, indice, eliminarTarea} = props;
  return (
    <div>
      <span>{tarea} </span>
      <button
        onClick={() => {
          eliminarTarea(indice);
        }}
      >
        X
      </button>
    </div>
  );
};

export default DivTarea;
