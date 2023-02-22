import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./PostSlice"
export const store = configureStore({
    reducer:{
        post:postReducer
    }
})