import { Link } from "react-router-dom";

const Lista = () => {
  const frutas = [
    {
      id: 1,
      nombre: "Kiwi",
    },
    {
      id: 2,
      nombre: "Damasco",
    },
    {
      id: 3,
      nombre: "Naranja",
    },
  ];
  return (
    <div>
      <h2>Lista</h2>
      <ul>
        {frutas.map((fru) => (
          <li key={fru.id}>
            <Link to={`/detalle/${fru.id}`}>
              {fru.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
