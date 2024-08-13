//Que caracteristicas componenen y se requieren para crear un componente

//1. Componente es una función, una función que comienza con mayúsculas
const App = () => {

  //2. es que tiene que retornar JSX (JSX como html, pero no es html, tiene diferencias)
  return (
    <div>
      Hola!
    </div>
  )
}

//3. tiene que exportarse por defecto el componente
export default App;