import { ref, uploadBytes } from "firebase/storage";
//nosotros ya tenemos una referencia al servicio de storage
import { storage } from "../config/firebase";

const subirArchivo = async (archivo) => {
    //esta buscando tener una referencia del archivo que va a estar o está en firestore
    //1. el objetivo, subir un archivo
    //2. de donde saco la información que necesito, de un input file, 
    //2.1 donde lo voy a guardar, en la refArchivo de firestore
    //3. tengo que transformar la información
    //4. como muestro el resultado del objetivo que estoy buscando
    const refArchivo = ref(storage, 'h1.png');
    console.log(refArchivo);
    try {
        const resultado = await uploadBytes(refArchivo, archivo);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

export {
    subirArchivo
}