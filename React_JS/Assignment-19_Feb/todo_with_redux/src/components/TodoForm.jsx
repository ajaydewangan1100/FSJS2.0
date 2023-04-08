
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create, setMyLocalTodo } from '../features/counter/counterSlice';
import { FiCalendar, FiFeather } from "react-icons/fi";
import Info from './Info';

const TodoForm = ({ setSearchInput }) => {
  const [input, setInput] = useState("");
  const [info, setInfo] = useState(false);
  const dispatch = useDispatch();

  const typing = (e) => {
    setInput(e.target.value);
    setSearchInput(e.target.value);
  }

  const submitTodo = (e) => {
    e.preventDefault()
    input &&
    (
    dispatch(create(input)),
    dispatch(setMyLocalTodo()),
    setInput(""),
    setSearchInput("")
    )
  }


  return (
    <div className='relative'>
      
        <div className='bg-gray-700 max-w-[150px] m-auto font-bold text-yellow-400 py-1  rounded flex justify-center items-center gap-2 '>To Do List <FiCalendar /> </div>
        {
        info 
        ?
        <Info setInfo={setInfo} />
        :
        <FiFeather onClick={() => setInfo(true)}
        className='text-yellow-500 border border-[#44444430] rounded p-[2px] text-2xl absolute left-[20px] top-[5px] ' />
        }
        <form onSubmit={submitTodo}
        className='flex justify-center bg-gray-600 rounded gap-2 items-center max-w-[600px] min-w-[330px] my-2 mx-auto' >
            <input type='text' value={input} placeholder='Type for search add for create'
            className='bg-gray-100 p-1 rounded font-semibold my-2 w-[75%] outline-none border-gray-400 border '
            onChange={(e) => typing(e)} />
            <button type='submit'
            className='border border-green-500 py-1 px-3 text-gray-100 rounded hover:bg-green-500 hover:text-white' >
               Add </button>
        </form>
    </div>
  )
}

export default TodoForm