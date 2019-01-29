import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/actions';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

import './App.css';

class App extends Component {

  componentDidMount() {
    let savedTodos = localStorage.getItem("todos")
    if (savedTodos !== null) {
      savedTodos = JSON.parse(savedTodos);
      this.props.onPostTodos(savedTodos);
  }
  }

  componentDidUpdate(prevProps) {
    let newTodos = this.props.todos;
    if (newTodos !== prevProps.todos) {
      newTodos = JSON.stringify(newTodos);
      localStorage.setItem('todos', newTodos)
    }
  }

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
    onPostTodos: (todos) => dispatch(actions.postTodos(todos)),
    onNewTodoHandler: (todo) => dispatch(actions.addTodo(todo)),
    onCompleted: (id) => dispatch(actions.updateCompleted(id)),
    onDelete: (id) => dispatch(actions.deleteTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
