import React from 'react';

import './TodoList.css';

const todoList = (props) => {
        return (
        <React.Fragment>
            {props.todos.map((todo, i) =>   (
                <div key={i} className="TodoContainer">
                    <p className={todo.completed ? "Todo Completed": "Todo"} onClick={() => props.completed(i)} style={{display:"inline"}}>
                                            {todo.value}
                    </p>
                    <span onClick={() => props.deleted(i)}>x</span>
                </div>
                                        
                                        
                                                ))}
        </React.Fragment>
        )
}

export default todoList;