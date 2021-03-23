import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router';
import AuthenticationService from '../services/AuthenticationService'
class HeaderComponent extends Component{
    render(){

        // console.log(this.props.isUserLoggedIn)
        // console.log("Local var")
        console.log(AuthenticationService.isUserLoggedIn())
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log("Local var")
        console.log(isUserLoggedIn)
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand">mdshahid380</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/home/mdshahid380">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
         )
    }
}

export default withRouter(HeaderComponent)