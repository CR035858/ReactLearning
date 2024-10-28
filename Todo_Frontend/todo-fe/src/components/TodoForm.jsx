import React, { useState } from 'react'
import axios from 'axios';
export default function TodoForm({input, setInput, todos, setTodos, editTodo, setEditTodo}) {
    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        if(!editTodo){
            axios.post(`http://localhost:8080/todos`,{task:input,completed:false});
            setInput("");
        }else{
            const newTodo = todos.find(todo => todo.id === editTodo.id);
            newTodo.task = input;
            axios.put(`http://localhost:8080/todos/todos/${editTodo.id}`,newTodo)
            setEditTodo("")
            setInput("");
        }
    }


  return (
    <>

        <div className="form">
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Add A Todo'
                    onChange={handleChange}
                    value={input}
                />

                <button type='submit'>
                    {editTodo ? "Edit" : "Add"}
                </button>
            </form>

        </div>
    
    </>
  )
}
