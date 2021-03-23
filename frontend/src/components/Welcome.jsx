import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Welcome extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="container text-center">
                <h3> Welcome {this.props.match.params.name} to the APP...</h3>
                <p>You can check your todo list <Link to="/todos">here</Link></p>
            </div>
        )
    }
}

export default Welcome