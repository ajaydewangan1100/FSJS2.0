import { createSlice, current } from '@reduxjs/toolkit';
import React, { useEffect } from 'react';

const initialState = {
    value : [],
}


export const todoSlice = createSlice({
    name : 'todoList',
    initialState,
    reducers : {
        getMyLocalTodo : (state) => {
            JSON.parse(localStorage.getItem("myTodo"))
            ?
            (state.value = JSON.parse(localStorage.getItem("myTodo")) )
            :
            (state.value = [],console.log(current(state.value)) )
        },
        setMyLocalTodo : (state) => {
            localStorage.setItem("myTodo", JSON.stringify(state.value))
        },
        create : (state, action) => {
            state.value.unshift({
                id: Math.random(),
                task: action.payload,
                isDone: false
            })
        },
        deleteTodo : (state, action) => {
            state.value = state.value.filter(todo => todo.id != action.payload)
        },
        update : (state, action) => {
            for(let i = 0; i < current(state.value).length; i++){
                (current(state.value)[i].id === action.payload.id) 
                && 
                (state.value[i].task = action.payload.inputValue)
            }
        },
        doneTodo : (state, action) => {
            for(let i = 0; i < current(state.value).length; i++){
                (current(state.value)[i].id === action.payload) 
                && 
                (state.value[i].isDone = !state.value[i].isDone)
            }
            // current(state.value).map(todo => (
            //     (todo.id === action.payload) 
            //     && 
            //     (todo.isDone = !todo.isDone)
            // ))
        }
    }
})

export const { getMyLocalTodo, setMyLocalTodo, create, deleteTodo, update, doneTodo } = todoSlice.actions;

export default todoSlice.reducer;