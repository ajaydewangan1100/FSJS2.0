import React, {useState} from "react"
import "./App.css"

function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [newID, setNewId] = useState(0);


  const changing = (event) => {
    setInputValue(event.target.value);
  }

  const CreateTodo = () => {
    (inputValue && setList([...list, {id:newID, text:inputValue}]));
    setInputValue("");
    setNewId(newID + 1);
  }

  const deleteIt = (li) => { 
    setList(list.filter((l) => l.id !== li.id));
    console.log(list);
  }

  const editIt = (li) => {
    setInputValue()
  }


  return (
    <div className="container">
      <h1>TODO List</h1>
      <div className="input_area">
        <input type="text" onChange={ (event) => changing(event) } value={inputValue} placeholder="Type ToDo" className="input_box"></input>
        <button onClick={  CreateTodo } className="add_button">Add ToDo</button>
      </div>
      <div className="todo_list">
          {list.map((li) => (
              <div className="allTodoList" key={li.id}>
                <p className="para">
                  { li.text }
                </p>
                <div className="functional_div">
                  <span className="done-btn" onClick={(e) => e.target.parentElement.parentElement.firstChild.classList.toggle("done")}>Done</span>
                  <i className="edit-btn" onClick={() => editIt(li)}>Edit</i>
                  <span className="cut-btn" onClick={(e) => deleteIt(li)}>X</span>
                </div>
              </div>
          ))}
      </div>

    </div>
  );
}

export default App;
