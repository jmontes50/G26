import Titulo from "./Titulo"; //si es un archivo de js o de jsx no necesita colocarse la extensión
import Parrafo from "./Parrafo";
//Que caracteristicas componenen y se requieren para crear un componente

//1. Componente es una función, una función que comienza con mayúsculas
const App = () => {
  const titulo = "Olimpiadas 2024";
  const variableJS = "Texto de JS";
  const contenido1 = "Perú juega partido de volley";
  const contenido2 = "Descubrimiento de agua líquida en Marte";
  //2. es que tiene que retornar JSX (JSX como html, pero no es html, tiene diferencias)
  //2.1 solamente podemos retornar 01 solo elemento en cada componente
  //para poner JS dentro del JSX basta con abrir llaves {} y referenciarlo dentro
  //Toda etiqueta tiene que estar cerrada o autocerrada
  return (
    <>
      {/* Los props pueden recibir valores estáticos directamente como texto o números... */}
      <Titulo texto="París 2024" deportes="100" />
      <Titulo texto="Los Angeles 2028" deportes={20}  />
      {/*... Como también se puede pasar variables, objetos, arreglos y funciones */}
      <Titulo texto={titulo}  deportes={30} />
      <Titulo texto={1234}  deportes={40} />
      {/* <h1>Hola! {titulo} {10+10}</h1> */}
      <hr />
      <Parrafo contenido={contenido1} />
      <Parrafo contenido={contenido2} />
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur {variableJS}</p>
      <hr />
      <p>
      Lorem ipsum dolor sit amet
      </p>
    </>
  )
}

//3. tiene que exportarse por defecto el componente
export default App;