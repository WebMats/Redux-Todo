import React, { Component } from 'react';

import './TodoForm.css';


class TodoForm extends Component {
        state = {
                inputValue: "",
        }

        formSubmitHandler = (e) => {
                e.preventDefault();
                if (this.state.inputValue === "") {
                        return
                }
                this.props.addNewTodo(this.state.inputValue)
                this.setState({inputValue: ""})
        }

        render() {
        return (
                <form className="TodoForm" autoComplete="off" onSubmit={this.formSubmitHandler}>
                        <input 
                                type="text" 
                                placeholder="Add new Todo" 
                                value={this.state.inputValue} 
                                onChange={(e) => {this.setState({inputValue: e.target.value})}} />
                        <br />
                        <button className="SubmitButton">Submit</button>
                </form>
        )
        }
}

export default TodoForm;