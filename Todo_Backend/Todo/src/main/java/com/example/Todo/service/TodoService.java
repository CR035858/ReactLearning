package com.example.Todo.service;

import com.example.Todo.model.Todo;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TodoService {
    List<Todo> getAllTodos();
    Todo createTodo(Todo todo);
    Todo updateTodo(Long id, Todo todo);
    void deleteTodo(Long id);
    Todo completeTodo(Long id);
    Todo incompleteTodo(Long id);
}
