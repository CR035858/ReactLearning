import React,{useEffect} from 'react'
import getAllTodo from './apicalls';
import './TodoList.css'
import axios from 'axios';
import './Header.css'
export default function TodoList({input, setInput, todos,setTodos,editTodo,setEditTodo}) {

    const handleComplete = async (todo) => {
        await setTodos(
            todos.map(item => {
                if(item.id === todo.id){
                    if(!item.completed){
                        axios.put(`http://localhost:8080/todos/todos/${item.id}/complete`)
                        return {...item, completed: !item.completed};
                    }
                    else{
                        axios.put(`http://localhost:8080/todos/${item.id}/incomplete`);
                    }
                }
                return item;
            })

        )
        }
        const handleEdit = (id) => {
            const findTodo = todos.find ((todo) => todo.id === id);
            setInput(findTodo.task);
            setEditTodo(findTodo);
        };

        const delteTodo = (id) => {
            const findTodo = todos.find ((todo) => todo.id === id);
            axios.delete(`http://localhost:8080/todos/todos/${findTodo.id}`);
        }


    useEffect(()=>{
        getAllTodo()
        .then((res) => {
            setTodos(res.data);
        })
    })
    if(todos.length > 0){
        return(

            <>  
            <div>    
                {    
                    todos.map((todo) =>(
                        !todo.completed?
                        <li key={todo.id}>
                            <div className={`task ${todo.completed ? "completed" : ""}`}>
                            {todo.task}
                            </div>
                            <div className='buttons'>
                                <button className="complete" onClick={() => handleComplete(todo)}><i class="fa-solid fa-circle-check"></i></button>
                                <button className='edit' onClick={() => handleEdit(todo.id)}><i class="fa-regular fa-pen-to-square"></i></button>
                                <button className='remove' onClick={() => delteTodo(todo.id)}><i class="fa-solid fa-trash"></i></button>
                            </div>
                        </li>:""
                    ))}
                </div>    
            </>
    );
 }

    else{
        return(
            <>
                <div className='Empty-Message'>
                    <h1>No Items Present In the Database</h1>
                    <h2>Please Add a Task</h2>
                </div>
            </>
        )
    }
};
