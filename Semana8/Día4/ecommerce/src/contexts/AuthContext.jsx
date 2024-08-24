//para que toda la información y manejo del login este aquí
import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const desuscribir = onAuthStateChanged(auth, (dataUser) => {
      //en el argumento del callback obtendremos la información del usuario
      //En el caso de que no este logueado ningún usuario dataUser será igual a null
      // console.log("escuchando usuario:",dataUser)
      setUser(dataUser);
    });

    return () => {
      //y esto se ejecutará cuando el componente se destruya
      desuscribir();
    }
  }, [])

  return (<AuthContext.Provider value={{user, loginWithGoogle}}>
    { children }
  </AuthContext.Provider>)
}

export {
  AuthContext,
  AuthContextProvider
}