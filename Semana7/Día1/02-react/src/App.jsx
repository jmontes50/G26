//Que caracteristicas componenen y se requieren para crear un componente

//1. Componente es una función, una función que comienza con mayúsculas
const App = () => {

  //2. es que tiene que retornar JSX (JSX como html, pero no es html, tiene diferencias)
  //2.1 solamente podemos retornar 01 solo elemento en cada componente
  return (
    <>
      Hola!
      <p>
      Lorem ipsum dolor sit amet
      </p>
    </>
  )
}

//3. tiene que exportarse por defecto el componente
export default App;