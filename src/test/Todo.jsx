
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import '../css/Todo.css';

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


const [count, setCount] = useState(0);
const [visible, setVisible] = useState(true)

const increase = () => {
  setCount(count+1)
};

const decrease = ()=>{
setCount(count-1)
}


  return (
    <div className="app-container">
    { 

      visible &&
<div className="visible">
<p>Close paragraph</p>
<button onClick={()=> setVisible(!visible)}>click to !show</button>
</div>
}
<br/>
<p>Number of orders</p>
    <div className="No_order">
 <button onClick={decrease}> - </button> 
 <h2> {count} </h2>
<button  onClick={increase } >+</button> 
</div>
{
  count === 10 ? (
    <>
    <p>You have react yo max order</p>
    </>
  ) 
  :(
    <>
    <p>You have added {count} items</p>
    </>
  )
}:
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
