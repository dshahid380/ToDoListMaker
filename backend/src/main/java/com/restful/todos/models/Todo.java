package com.restful.todos.models;

import java.util.Date;

public class Todo {
    private long id;
    private String username;
    private String description;
    private Date date;
    private boolean isDone;

    public Todo(long id, String username, String description, Date date, boolean isDone) {
        this.id = id;
        this.username = username;
        this.description = description;
        this.date = date;
        this.isDone = isDone;
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getUsername() {
        return username;
    }

    public Date getDate() {
        return date;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setDone(boolean isDone) {
        this.isDone = isDone;
    }
}
