//para obtener la información del estado, useSelector
import { useSelector } from "react-redux";

const Counter = () => {
  //es obtener lo justo y necesario que se requiera, no todo el estado
  const count = useSelector((state) => state.counter.value);

  console.log("count de useSelector", count);

  return (
    <div>
      <h3>Contador {count}</h3>
    </div>
  );
};

export default Counter;
