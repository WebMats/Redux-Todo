import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/actions';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

import './App.css';

class App extends Component {
  // state = {
  //   todos: []
  // }

  // componentDidMount() {
  //   const savedTodos = localStorage.getItem('todos');
  //   if( savedTodos !== undefined) {
  //     const newTodos = JSON.parse(savedTodos);
  //     this.setState({todos: newTodos})
  //   }
  // }
  // componentDidUpdate(prevProps) {
  //   if (!(this.props.todos === prevProps.todos)) {
  //     const toSave = JSON.stringify(this.props.todos);
  //     localStorage.setItem("todos", toSave);
  //     this.setState({todos: this.props.todos})
  //   }
  // }

  render() {
    return (
      <div className="App">
        <TodoList 
          completed={this.props.onCompleted} 
          todos={this.props.todos} 
          deleted={this.props.onDelete}
        />
        <TodoForm addNewTodo={this.props.onNewTodoHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onNewTodoHandler: (todo) => dispatch(actions.addTodo(todo)),
    onCompleted: (id) => dispatch(actions.updateCompleted(id)),
    onDelete: (id) => dispatch(actions.deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
