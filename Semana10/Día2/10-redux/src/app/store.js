import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import dataReducer from "./data/dataSlice";

const store = configureStore({
    reducer: {
        counter:counterReducer,
        data:dataReducer
    }
})

export default store;