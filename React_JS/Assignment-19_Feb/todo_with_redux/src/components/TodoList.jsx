
import React, { useEffect, useState } from 'react';
import { FiEdit, FiTrash2, FiCheck } from "react-icons/fi";

import { useSelector, useDispatch } from 'react-redux';
import { getMyLocalTodo, setMyLocalTodo, update, deleteTodo, doneTodo } from '../features/counter/counterSlice';


const TodoList = ({ searchInput }) => {
  
  const allTodos = useSelector(state => state.todo.value );
  const dispatch = useDispatch();
 
  useEffect(() => {
    JSON.parse(localStorage.getItem("myTodo")) 
    &&
    dispatch(getMyLocalTodo())
  }, [])
  
  const [inputValue, setInputvalue] = useState("");
  const [updateClicked, setUpdateClicked] = useState(0);
  const [clickedTodo, setClickedTodo] = useState("");
  
  console.log(allTodos);
  
  const todoMarked = (id) => {
    dispatch(doneTodo(id));
    dispatch(setMyLocalTodo());
  }
  
  const updateHandler = (id , task) => {
    console.log(id + ":" + task);
    setInputvalue(task);
    setUpdateClicked(id);
  }

  const updateSubmit = async (id) => {
    await dispatch(update({ id, inputValue }))
    await dispatch(setMyLocalTodo())
    console.log(updateClicked);
    setUpdateClicked(0)
    setInputvalue("");
  }
  
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
    dispatch(setMyLocalTodo());
  }
  

  return (
    <div className='overflow-y-auto max-h-[80vh] px-1 '>
      {
        allTodos
        .filter(ToDo => 
          ToDo.task.toLowerCase().includes(searchInput.toLowerCase())
        )
        .map(todo => {

          const inputClasses = 'p-2 px-1 sm:px-3 font-semibold bg-inherit w-[100%] border outline-offset-0 rounded overflow-hidden outline-none text-yellow-500';

          const inputDivClasses = 
          !todo.isDone 
          ? 
          "px-1 sm:px-3 text-lg text-white bg-inherit font-bold overflow-hidden truncate "
          :
          "px-1 sm:px-3 bg-inherit font-semibold truncate " + ' line-through decoration-green-500 text-green-500'

          const doneTodo = 
          !todo.isDone 
          ? 
          'h-[15px] min-w-[15px] w-[15px] bg-white rounded ' 
          :
           'h-[15px] min-w-[15px] w-[15px] rounded ' + " bg-green-500";

          return (
            <div key={todo.id} 
            className='px-2 py-2 my-1 flex justify-between rounded-md bg-gray-500 '>
              <div 
              className='flex items-center gap-1 w-[80%] '>
                <button 
                onClick={() => todoMarked(todo.id)} 
                className={doneTodo} ></button>
                
                {(updateClicked !== todo.id)
                ?
                <div className={inputDivClasses} onClick={() => setClickedTodo(todo.task)} > {todo.task} </div>
                :
                <input key={todo.id} id={todo.id} onChange={(e) => setInputvalue(e.target.value)}
                className={'input' + inputClasses} value={inputValue} />
                }
              </div>

              <div className='flex items-center gap-3'>
                {(updateClicked !== todo.id) 
                ?
                <>
                  <FiEdit id="editMark"
                  className='text-yellow-500' onClick={() => updateHandler(todo.id, todo.task)} />
                  <span className='h-[50%] w-[2px] border ' />
                  <FiTrash2 id="deleteMark"
                  className='text-red-500 mr-1 sm:mr-2' onClick={() => deleteHandler(todo.id)} />
                </>
                :
                <FiCheck id="rightMark"
                className='text-white font-bolder border bg-green-500 h-[25px] w-[40px] rounded ' onClick={() => updateSubmit(todo.id)} />
}
              </div>
            </div>
          )
        })
      }
      {
      clickedTodo && 
      <div onClick={() => setClickedTodo("")}
      className='absolute  w-[100%] h-[100%] top-0 left-0 bg-[#45454545] flex flex-col justify-center items-center p-3'>
        <div className='rounded bg-gray-600 text-white font-semibold text-2xl p-4 max-w-[500px] '>{clickedTodo}</div>
        <button onClick={() => setClickedTodo("")}
        className='px-3 py-1 text-red-400 text-xl hover:font-semibold hover:scale-150 duration-200 border rounded-full mt-4 '>X</button>
      </div> 
      }
    </div>
    
  )
}

export default TodoList