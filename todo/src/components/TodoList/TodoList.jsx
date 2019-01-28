import React from 'react';

const todoList = (props) => {

        return (
        <div>
            {props.todos.map((todo, i) => <p key={i}>{todo.value}</p>)}
        </div>
        )
}

export default todoList;