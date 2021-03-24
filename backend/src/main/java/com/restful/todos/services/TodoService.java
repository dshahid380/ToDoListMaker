package com.restful.todos.services;
import com.restful.todos.models.Todo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {
    private static List<Todo> todosList = new ArrayList<>(Arrays.asList(
            new Todo(1, "mdshahid", "Learn to code in Python", new Date(), false),
            new Todo(2, "mdshahid", "Spring Boot Microservices", new Date(), false),
            new Todo(3, "mdshahid", "Learn to code in Java", new Date(), false)
    ));

    public List<Todo> findAll(String username){
        return todosList;
    }

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if(todo == null) return null;
        todosList.remove(todo);
        return todo;
    }

    private Todo findById(long id) {
        for(Todo todo: todosList){
            if(todo.getId() == id)
                return todo;
        }
        return null;
    }

}
