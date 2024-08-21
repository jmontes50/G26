import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
//nosotros ya tenemos una referencia al servicio de storage
import { storage } from "../config/firebase";
import { cambiarNombreConUUID } from "../utils/utils";

const subirArchivo = async (archivo) => {
    //esta buscando tener una referencia del archivo que va a estar o está en firestore
    //1. el objetivo, subir un archivo
    //2. de donde saco la información que necesito, de un input file, 
    //2.1 donde lo voy a guardar, en la refArchivo de firestore
    //3. tengo que transformar la información
    //4. como muestro el resultado del objetivo que estoy buscando
    const nuevoNombre = cambiarNombreConUUID(archivo.name); //archivo.name -> foto.jpg
    const refArchivo = ref(storage, nuevoNombre);
    try {
        await uploadBytes(refArchivo, archivo);
        const urlArchivo = await getDownloadURL(refArchivo);
        console.log("url archivo", urlArchivo);
        return urlArchivo;
    } catch (error) {
        // console.log(error);
        throw error;
    }
}

export {
    subirArchivo
}