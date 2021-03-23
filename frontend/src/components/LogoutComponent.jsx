import React, {Component} from 'react'

class LogoutComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>You have been logged out. </h2>
                <p>Thank you for using the Application</p>
            </div>
        )
    }
}

export default LogoutComponent