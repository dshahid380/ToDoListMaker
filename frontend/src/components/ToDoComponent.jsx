import React, {Component} from 'react'
import moment from 'moment'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import AuthenticationService from "../services/AuthenticationService.js";
import TodoDataService from '../apis/TodoDataService.js'

class ToDoComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: "Leanr Forms",
            date: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    onSubmit(values){
        console.log(values)
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.updateTodo(username, this.state.id, {
            id: this.state.id,
            description: values.description,
            date: values.date
        }).then(
            () => {
                this.props.history.push('/todos')
            }
        )
    }

    validate(values){
        let errors = {}
        if(!values.description)
            errors.description = 'Enter a description.'
        else if(values.description.length < 5)
            errors.description = 'Enter atease 5 character in the description.'

        if(!moment(values.date).isValid)
            errors.date = "Enter a valid target date"

        return errors 
    }

    componentDidMount(){
        let username = AuthenticationService.getLoggedInUsername()

        TodoDataService.getTodoById(username, this.state.id).then(
            response => this.setState({
                description: response.data.description,
                date: moment(response.data.date).format('YYYY-MM-DD')
            })
        )
    }

    render(){
        let description = this.state.description
        let date = this.state.date
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{description,date}}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="date" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Date</label>
                                        <Field className="form-control" type="date" name="date"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit"> Save </button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default ToDoComponent