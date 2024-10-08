import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import dataReducer from "./data/dataSlice";

const store = configureStore({
    reducer: {
        counter:counterReducer,
        users:dataReducer
    }
})

export default store;