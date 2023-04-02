
import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const allTodos = useSelector((state) => state.todoList.value )
  console.log(allTodos);

  return (
    <div>
      {
        allTodos.map(todo => {
          <input key={ todo.id } > { todo.task } </input>
        })
      }
    </div>
  )
}

export default TodoList