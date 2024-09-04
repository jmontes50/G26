//nos va a permitir indica que información queremos guardar, cual es el estado inicial, cual es el nombre y las acciones que podemos realizar
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  //la idea del initialState es que sea un objeto para que almacenemos varias cosas
  initialState: { value: 0 },
  //reducer
  reducers: {
    //ya vamos a definir las acciones que queramos que se ejecuten, cada acción va atener una función pura, para que cada acción indique de forma clara que cambio va a ver en el estado
    increment: (state) => {
      state.value += 1;
    },
  }
})