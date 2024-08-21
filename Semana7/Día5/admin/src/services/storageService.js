import { ref } from "firebase/storage";
//nosotros ya tenemos una referencia al servicio de storage
import { storage } from "../config/firebase";

const subirArchivo = () => {
    const refArchivo = ref(storage, 'h1.png');
    console.log(refArchivo)
}

export {
    subirArchivo
}