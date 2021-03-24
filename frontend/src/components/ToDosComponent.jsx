import React, { Component } from "react";
import TodoDataService from '../apis/TodoDataService.js'
import AuthenticationService from "../services/AuthenticationService.js";

class ToDosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : []
        }
    }

    componentDidMount(){
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveAllTodos(username).then(
            response => {
                this.setState({todos : response.data})
            }
        ).catch(
            response => console.log(response.error) 
        )
    }

    render(){
        return(
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>isDone</th>
                            <th>Date</th>
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
                                        <td>{todo.date.toString()}</td>
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