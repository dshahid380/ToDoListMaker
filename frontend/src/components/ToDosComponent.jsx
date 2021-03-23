import React, { Component } from "react";

class ToDosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [
                {
                    id: 1, 
                    desc: "C++ Blog",
                    done: false, 
                    date: new Date()
                },
                {
                    id: 2, 
                    desc: "Python Blog",
                    done: false, 
                    date: new Date()
                },
                {
                    id: 3, 
                    desc: "Goland Blog",
                    done: false, 
                    date: new Date()
                }
            ]
        }
    }

    render(){
        return(
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.desc}</td>
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