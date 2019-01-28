import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList todos={this.props.todos} />
        <TodoForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
