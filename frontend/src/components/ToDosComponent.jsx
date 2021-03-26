import React, { Component } from "react";
import TodoDataService from '../apis/TodoDataService.js'
import AuthenticationService from "../services/AuthenticationService.js";
import moment from 'moment'

class ToDosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos: [],
            message: null
        }
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
        this.handleUpdateTodo = this.handleUpdateTodo.bind(this)
    }

    handlePageRefresh(){
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveAllTodos(username).then(
            response => {
                this.setState({todos : response.data})
            }
        ).catch(
            response => console.log(response.error) 
        )
    }

    componentDidMount(){
        this.handlePageRefresh()
    }

    handleDeleteTodo(id){
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.deleteTodo(username, id).then(
            response => {
                this.setState({message: `Delete of todo ${id} is successful.`})
                this.handlePageRefresh()
            }
        )
    }

    handleUpdateTodo(id){
        console.log("Update todo id"+id.toString)
        this.props.history.push(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedInUsername()
        // TodoDataService.deleteTodo(username, id).then(
        //     response => {
        //         this.setState({message: `Delete of todo ${id} is successful.`})
        //         this.handlePageRefresh()
        //     }
        // )
    }

    render(){
        return(
            <div className="container">
               {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>isDone</th>
                            <th>Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.date).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.handleUpdateTodo(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ToDosComponent