import axios from "axios";

export default async function getAllTodo(){
    return await axios.get(`http://localhost:8080/todos`);
}