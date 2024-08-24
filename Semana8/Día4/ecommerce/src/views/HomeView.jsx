import { useEffect } from "react"

const HomeView = () => {

  useEffect(() => {
    console.log("Dentro del cuerpo de useEffect");
    //lo que se ponga acá se ejecutará en la fase de limpieza cuando se este a punto de destruir el componente
    return () => {
      console.log("Adioooooos!, * se autodestruye! ")
    }
  }, [])
  return (
    <div>HomeView</div>
  )
}

export default HomeView