
import React, { useState } from 'react';

const TodoForm = () => {
  const [input, setInput] = useState("");


  return (
    <>
        <form className='flex justify-center gap-2 items-center max-w-[600px] min-w-[340px] my-2 mx-auto' >
            <input type='text' value={input} 
            className='bg-gray-100 p-1 rounded my-2 w-[75%] outline-none border-gray-500 border '
            onChange={(e) => setInput(e.target.value)} />
            <button type='submit'
            className='border border-green-700 py-1 px-3 rounded hover:bg-gray-500 hover:text-white' >
               Add </button>
        </form>
    </>
  )
}

export default TodoForm