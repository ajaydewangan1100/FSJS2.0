
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create } from '../features/counter/counterSlice';

const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault()
    dispatch(create(input)) 
  }


  return (
    <>
        <form onSubmit={submitTodo}
        className='flex justify-center gap-2 items-center max-w-[600px] min-w-[330px] my-2 mx-auto' >
            <input type='text' value={input} placeholder='Type your ToDo'
            className='bg-gray-100 p-1 rounded my-2 w-[75%] outline-none border-gray-400 border '
            onChange={(e) => setInput(e.target.value)} />
            <button type='submit'
            className='border border-green-500 py-1 px-3 rounded hover:bg-green-500 hover:text-white' >
               Add </button>
        </form>
    </>
  )
}

export default TodoForm