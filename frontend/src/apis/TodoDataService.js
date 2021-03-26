import axios from 'axios'

class TodoDataService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/user/${name}/todos`)
    }

    deleteTodo(username, id){
        return axios.delete(`http://localhost:8080/user/${username}/todos/${id}`)
    }

    getTodoById(username, id){
        return axios.get(`http://localhost:8080/user/${username}/todos/${id}`)
    }

    updateTodo(username, id, todo){
        return axios.put(`http://localhost:8080/user/${username}/todos/${id}`, todo)
    }

    createTodo(username, id, todo){
        return axios.put(`http://localhost:8080/user/${username}/todos/${id}`, todo)
    }
}

export default new TodoDataService