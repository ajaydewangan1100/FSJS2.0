import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "../features/counter/counterSlice";

export const store = configureStore({
    reducer : {
        todo: todoSlice
    }
})
