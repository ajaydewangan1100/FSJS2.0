import { useState } from 'react'

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  

  return (
    <div className='bg-gray-200 m-2 rounded'>
      <TodoForm />
      <TodoList />
    </div>
    )
}

export default App
