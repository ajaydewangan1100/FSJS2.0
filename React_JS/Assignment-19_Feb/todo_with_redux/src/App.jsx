import { useState } from 'react'

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
    )
}

export default App
