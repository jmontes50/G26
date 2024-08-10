/*
//FETCH Va a darme una promesa
// fetch(url)
fetch("https://reqres.in/api/users?page=2")
// fetch("https://reqres.in/api/unknown/23")
.then((respuesta) => {
  console.log(respuesta);
  //tenemos un JSON que es texto plano
  if (respuesta.status === 200){
    //si es igual que 200 significa que fue bien
    return respuesta.json(); //otra promesa, que esta convirtiendo ese texto plano del json a Javascript común y silvestre
  } else {
    //throw se puede utilizar para lanzar errores
    throw new Error("La petición no se completo de forma correcta");
  }
})
.then((datos) => {
  console.log(datos);
  console.table(datos.data);
})
.catch((error) => {
  //error de cors
  //error de implementacion
  //error de red
  //NO VA A SALTAR CUANDO SEA UN ERROR 404
  console.log(error);
})
*/

const obtenerUsuarios = async () => {
  try {
    const URL = 'https://reqres.in/api/users?page=2';
    const respuesta = await fetch(URL); //esperamos al resultado con fetch y cuando termina, pasa a la siguiente línea
    console.log("Response:", respuesta);
    if(respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
      console.table(datos.data)
    } else {
      throw new Error("La petición no se completo de forma correcta");
    }
  } catch (error) {
    console.log(error);
  }
}
obtenerUsuarios();