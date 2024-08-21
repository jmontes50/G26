//Una referencia a nuestro propia aplicación ya registrada de firebase
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

//firebase nos da unas credenciales asi que las estamos trayendo de las variables de entorno configuradas previamente
const firebaseConfig = {
//import.meta.env.VITE_
    apiKey: import.meta.env.VITE_API_KEY,  
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,  
    projectId: import.meta.env.VITE_PROJECT_ID,  
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,  
    messagingSenderId: import.meta.env.VITE_SENDER_ID,  
    appId: import.meta.env.VITE_APP_ID 
};

//tenemos una referencia a la aplicación registrada
const app = initializeApp(firebaseConfig);

//al tener la referencia de la aplicacion en app, podemos obtener los diferentes módulos que estemos utilizando
const storage = getStorage(app);

//y los exportamos porque si van a ser necesarios para hacer las tareas relacionadas a cada módulo
export {
    //es una referencia del servicio, del módulo de storage de firebase
    storage
}