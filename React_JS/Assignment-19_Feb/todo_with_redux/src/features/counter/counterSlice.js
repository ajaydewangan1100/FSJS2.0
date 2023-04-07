import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    value : [   
        {
            id: 1,
            task: "Wood cut agian again agian",
            isDone: true
        },
        {
            id: 2,
            task: "Wood set",
            isDone: false
        }
    ],
}

export const todoSlice = createSlice({
    name : 'todoList',
    initialState,
    reducers : {
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
            state.value = state.value.map(todo => {
                if(todo.id !== action.payload.id){ todo } 
                else {todo.task = action.payload.task}
            })
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

export const { create, deleteTodo, update, doneTodo } = todoSlice.actions;

export default todoSlice.reducer;