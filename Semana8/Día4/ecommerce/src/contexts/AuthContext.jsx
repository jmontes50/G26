//para que toda la información y manejo del login este aquí
import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  
}