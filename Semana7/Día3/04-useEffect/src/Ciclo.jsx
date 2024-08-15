import { useState, useEffect } from "react";

const Ciclo = () => {
  const [producto, setProducto] = useState({});

  console.log("1. yo estoy dentro del componente");

  useEffect(() => {
    console.log("3. yo estoy dentro del useEffect");
    setTimeout(() => {
      //cambio de estado después de 4 segundos
      setProducto({ nombre: "Adobo" });
    }, 4000);
  }, []);

  return (
    <div>
      {console.log("2. Yo estoy en el return")}
      Hola!
      {/* renderizado condicional */}
      { producto.nombre ? <h1>{producto.nombre.toUpperCase()}</h1> : null }
    </div>
  );
};

export default Ciclo;
