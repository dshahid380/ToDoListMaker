package com.restful.todos.controllers;

import com.restful.todos.models.Todo;
import com.restful.todos.services.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TodoResourceController {

    private TodoService todoService;

    public TodoResourceController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/user/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoService.findAll(username);
    }

    @GetMapping("/hello")
    public String helloWorld(){
        return "Hello World";
    }

    @DeleteMapping("/user/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        if(todoService.deleteById(id) != null){
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
