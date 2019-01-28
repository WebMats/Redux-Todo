import React, { Component } from 'react';

class TodoForm extends Component {
        state = {
                inputValue: "",
        }

        formSubmitHandler = (e) => {
                e.preventDefault();
                this.props.addNewTodo(this.state.inputValue)
        }

        render() {
        return (
                <form className="TodoForm" autoComplete="off" onSubmit={this.formSubmitHandler}>
                        <input 
                                type="text" 
                                placeholder="Add new Todo" 
                                value={this.state.inputValue} 
                                onChange={(e) => {this.setState({inputValue: e.target.value})}} />
                        <button className="SubmitButton">Submit</button>
                </form>
        )
        }
}

export default TodoForm;