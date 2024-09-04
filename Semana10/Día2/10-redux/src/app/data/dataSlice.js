import { createSlice } from "@reduxjs/toolkit";

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