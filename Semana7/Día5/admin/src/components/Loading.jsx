import estilos from "./styles/loading.module.css";

const Loading = () => {
  return (
    <div className={estilos["loading-container"]}>
      <i
        className={`fa-solid fa-spinner fa-spin-pulse fa-4x text-primary ${estilos["loading-icon"]}`}
      ></i>
    </div>
  );
};

export default Loading;
