import React, { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CompletedHeader from './components/CompletedHeader'
import './App.css'
import Header from './components/Header';
import CompletedTodo from './components/CompletedTodo';
function App() {
  const[input,setInput] = useState("");
  const[todos,setTodos] = useState([]);
  const[editTodo,setEditTodo] = useState();
  return (
    <>
      <Header />
      <div className="whole">  
        <div className="wrapper">  
          <TodoForm input = {input} setInput = {setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
          <TodoList input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
        <div className="wrapper">  
          <CompletedHeader />
          <CompletedTodo todos={todos} setTodos={setTodos}/>
        </div>
      </div>
    </>
  )

}
export default App;
