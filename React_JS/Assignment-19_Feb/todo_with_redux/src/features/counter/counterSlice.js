const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value : [{
        id: 1,
        task: "wood cut",
        isDone: false
    }],
}

export const counterSlice = createSlice({
    name : 'todoList',
    initialState,
    reducer : {
        create : (state, action) => {
            state.value.unshift({
                id: Math.random(),
                task: action.payload,
                isDone: false
            })
        },
        delete : (state, action) => {
            state.value = state.value.filter(todo => todo.id != action.payload)
        },
        update : (state, action) => {
            state.value = state.value.map(todo => {
                if(todo.id !== action.payload.id){ todo } 
                else {todo.task = action.payload.task}
            })
        },
        done : (state, action) => {
            state.value = state.value.map(todo => {
                if(todo.id !== action.payload.id){todo}
                else {todo.isDone = !isDone}
            })
        }
    }
})

export const { createTodo, deleteTodo, updateTodo, doneTodo } = counterSlice.actions