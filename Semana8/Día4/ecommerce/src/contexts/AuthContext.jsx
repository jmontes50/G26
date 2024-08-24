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
    onAuthStateChanged(auth, (dataUser) => {
      console.log("escuchando usuario:",dataUser)
    });
  }, [])

  return (<AuthContext.Provider value={{user, loginWithGoogle}}>
    { children }
  </AuthContext.Provider>)
}

export {
  AuthContext,
  AuthContextProvider
}