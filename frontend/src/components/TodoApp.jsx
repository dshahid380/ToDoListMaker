import React, {Component} from 'react'
import LoginComponent from './Login'
import Welcome from './Welcome'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ErrorComponent from './ErrorComponent'
import ToDosComponent from './ToDosComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import AuthenticatedRoute from './AuthenticatedRoute'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                            <Switch>
                                <Route path="/" exact component={LoginComponent}/>
                                <Route path="/login" component={LoginComponent}/>
                                <AuthenticatedRoute path="/home/:name" component={Welcome}/>
                                <AuthenticatedRoute path="/todos" component={ToDosComponent}/>
                                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                                <Route component={ErrorComponent}/>
                            </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

export default TodoApp