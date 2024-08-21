import estilos from "./styles/loading.module.css";

const Loading = () => {
  return (
    <div class={estilos["loading-container"]}>
      <i
        class={`fa-solid fa-spinner fa-spin-pulse fa-4x text-primary ${estilos["loading-icon"]}`}
      ></i>
    </div>
  );
};

export default Loading;
