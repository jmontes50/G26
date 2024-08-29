import { createContext, useState, useEffect } from "react";

//creamos el contexto
const CartContext = createContext();

//crear el proveedor donde ira la lógica del contexto
const CartContextProvider = ({ children }) => {
  //tendremos un estado para guardar los items del carrito
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeProductFromCart = (id) => {};

  const totalCart = 0;

  //en el value indicamos que vamos a compartir
  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, removeProductFromCart, totalCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export {
  CartContext,
  CartContextProvider
}
