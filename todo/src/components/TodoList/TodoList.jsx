import React from 'react';

import './TodoList.css';

const todoList = (props) => {
        return (
        <div>
            {props.todos.map((todo, i) => <p className={todo.completed ? "Todo Completed": "Todo"} onClick={() => props.completed(i)} key={i}>{todo.value}</p>)}
        </div>
        )
}

export default todoList;