//para obtener la información del estado, useSelector
//para poder disparar una acción aparte de la acción, necesitare useDispatch
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setCounterValue } from "../app/counter/counterSlice";

const Counter = () => {
  //es obtener lo justo y necesario que se requiera, no todo el estado
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch(); //dispatch me va a permitir disparar una acción

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleCounterValue = () => {
    dispatch(setCounterValue(1000));
  }

  return (
    <div>
      <h3>Contador {count}</h3>
      <button onClick={handleIncrement}>
        Incrementar
      </button>
      <button onClick={handleDecrement}>
        Decrementar
      </button>
      <button onClick={handleCounterValue}>
        Pasar a 100
      </button>
    </div>
  );
};

export default Counter;
