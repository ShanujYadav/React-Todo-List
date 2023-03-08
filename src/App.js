import { useState } from "react";
import './App.css';

import img from './components/todolist.png';
import Button from 'react-bootstrap/Button';


function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const onAdd = () => {
    const newTodoList = [...todoList]
    newTodoList.push(todo)
    setTodoList(newTodoList)
    setTodo('')
  }

  const onDelete = (text) => {
    setTodoList(todoList.filter((_, idx) => idx !== text))
  }
  return <>
<div className="Container">
  <img src={img} alt="#"  className="mb-5"/>
    <h1 className="app-title">Todo list</h1>

    <input type="text"
      className="search-bar"
      placeholder="Add item here . . ."
      onChange={(e) => setTodo(e.target.value)}
      value={todo} />

    <Button
      className="add-btn"
      variant="primary"
      onClick={onAdd}>
      Add
    </Button>
    </div>
    <ul className="list">
      {
        todoList.map((Element, index) =>
         
        <li className="item"
            key={index}>
              
            {Element}
            <Button className="delete-btn"
              variant="danger"
              onClick={() => onDelete(index)}>
              X
            </Button>
          </li>)
      }
    </ul>
    </>

}
export default App;
