import { useState } from 'react'

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [searchInput, setSearchInput] = useState("");
  
  return (
    <div className='bg-gray-200 m-1 sm:m-2 rounded px-1 sm:px-3 py-2 max-w-[700px] sm:mx-auto '>
      <TodoForm setSearchInput={setSearchInput} />
      <TodoList searchInput={searchInput} />
    </div>
    )
}

export default App
