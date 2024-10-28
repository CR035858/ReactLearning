import React,{useEffect} from 'react'
import axios from 'axios'
import getAllTodo from './apicalls'
export default function CompletedTodo({todos,setTodos}) {

    const handleComplete = async (todo) => {
        await setTodos(
            todos.map(item => {
                if(item.id === todo.id){
                    if(item.completed){
                        axios.put(`http://localhost:8080/todos/${item.id}/incomplete`)
                        return {...item, completed: !item.completed};
                    }   
                }
                return item;
            })

        )
        }

        useEffect(()=>{
            getAllTodo()
            .then((res) => {
                setTodos(res.data);
            })
        })

    const delteTodo = (id) => {
        const findTodo = todos.find ((todo) => todo.id === id);
        axios.delete(`http://localhost:8080/todos/todos/${findTodo.id}`);
    }

    if(todos.length > 0){
        return (
            <div className={`${todos.completed? "": "Empty-Message"}`}> 
                { 
                todos.map((todo) =>(
                todo.completed?
                <li key={todo.id}>
                    <div className={`task ${todo.completed ? "completed" : ""}`}>
                        {todo.task}
                    </div>
                    <div className='buttons'>
                        <button className="incomplete" onClick={() => handleComplete(todo)}><i class="fa-solid fa-circle-check"></i></button>
                        <button className='remove' onClick={() => delteTodo(todo.id)}><i class="fa-solid fa-trash"></i></button>
                    </div>
                </li>
                :""
                ))}
            </div> 
          )

    }
    else{
        return(
            <div className='Empty-Message'>
                <h1>No Items Present in the Database</h1>
                <h2>Please add then click on complete button see the completed task</h2>
            </div>
        )
    }
}
