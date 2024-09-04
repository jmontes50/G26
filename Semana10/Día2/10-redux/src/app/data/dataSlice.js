import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createAsyncThunk me pide un nombre y la función asincrona por ejecutar
const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_ , thunkApi) => {
    try {
      //vamos a hacer la petición, la tarea asincrona
      const result = fetch('https://reqres.in/api/users?page=2');
      return result.json(); //aca ya esta transformado de JSON a un objeto de JS
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
)

const dataSlice = createSlice({
  name:'users',
  initialState: {
    listUsers: [],
    loading: 'idle', //idle como en espera,
    error: null
  },
  reducers: {
    setUsers: (state, action) => {
      state.listUsers = action.payload;
      state.loading = false;
    }
  }
})

export default dataSlice.reducer;