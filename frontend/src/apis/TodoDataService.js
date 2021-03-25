import axios from 'axios'

class TodoDataService{
    retrieveAllTodos(name){
        return axios.get(`http://localhost:8080/user/${name}/todos`)
    }

    deleteTodo(username, id){
        return axios.delete(`http://localhost:8080/user/${username}/todos/${id}`)
    }
}

export default new TodoDataService