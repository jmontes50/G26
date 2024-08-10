const URL = "https://66b797cd7f7b1c6d8f1c4b3d.mockapi.io/";

const getProducts = async () => {
  try {
    const response = await fetch(`${URL}productos`);
    if (response.status === 200){
        const data = await response.json();
        return data;
    } else{
        throw new Error("Error al obtener los datos");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

//consideraria que este archivo va a tener más funciones, para obtener, crear, actualizar, eliminar

export {
  getProducts
}