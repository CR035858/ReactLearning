package com.example.Todo.serviceimp;

import com.example.Todo.model.Todo;
import com.example.Todo.repository.TodoRepository;
import com.example.Todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TodoServiceImp implements TodoService {
    @Autowired
    private TodoRepository todoRepository;

    @Override
    public List<Todo>  getAllTodos(){
        return todoRepository.findAll();
    }

    @Override
    public Todo createTodo(Todo todo){
        return todoRepository.save(todo);
    }

    @Override
    public Todo updateTodo(Long id, Todo todo){
        Optional<Todo> todoOptional = todoRepository.findById(id);
        if (todoOptional.isPresent()){
            todo.setId(id);
            return todoRepository.save(todo);
        }
        return null;
    }

    @Override
    public void deleteTodo(Long id){
        todoRepository.deleteById(id);
    }

    @Override
    public Todo completeTodo(Long id){
        Optional<Todo> todoOptional = todoRepository.findById(id);
        if (todoOptional.isPresent()){
            Todo todo = todoOptional.get();
            todo.setCompleted(true);
            return todoRepository.save(todo);
        }
        return null;
    }

    @Override
    public Todo incompleteTodo(Long id){
        Optional<Todo> todoOptional = todoRepository.findById(id);
        if (todoOptional.isPresent()){
            Todo todo = todoOptional.get();
            todo.setCompleted(false);
            return todoRepository.save(todo);
        }
        return null;
    }
}
