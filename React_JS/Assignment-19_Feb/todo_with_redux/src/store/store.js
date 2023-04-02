import { configureStore } from "@reduxjs/toolkit";
import { counterSliceq } from "../features/counter/counterSlice";

export const store = configureStore({
    reducer : {
        todoList: counterSliceq
    }
})