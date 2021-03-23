import React, {Component} from 'react'
import AuthenticationService from '../services/AuthenticationService'

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false 
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    loginClicked(){
        // console.log(AuthenticationService.isUserLoggedIn())
        if(this.state.username === 'mdshahid' && this.state.password === 'shahid380'){
            AuthenticationService.registerSuccessfulLogin(this.state.username)
            // console.log(AuthenticationService.isUserLoggedIn())
            console.log("Login is successful")
            this.props.history.push(`/home/${this.state.username}`)
        }else{
            this.setState({hasLoginFailed: true})
            this.setState({showSuccessMessage: false})
        }
    }

    render(){
        return(
            <div className="container text-center">
                <div className="jumbotron login">
                    <div className="form-outline mb-4"><h2>Please Login</h2></div>
                    <div className="form-outline mb-4">
                        <input type="text" name="username" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Username"/>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Password"/>
                    </div>
                    <button className="btn btn-primary btn-block" onClick={this.loginClicked}>Login</button>
                </div>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credential</div>}
                {this.state.showSuccessMessage && <div className="alert alert-success">Login Successful</div>}
            </div>
        )
    }
}

export default LoginComponent