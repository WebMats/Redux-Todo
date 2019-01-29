import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/actions';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

import './App.css';

class App extends Component {
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
