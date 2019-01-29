import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todos: [
        {value: "Walk the dog.", completed: false}
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            const incomingTodo = {value: action.todo, completed: false};
            return {todos: [...state.todos, incomingTodo]}
        case actionTypes.UPDATE_COMPLETED:
            const incomingTodoToUpdate = {value: state.todos[action.id].value, completed: !state.todos[action.id].completed};
            const copiedState = [...state.todos];
            copiedState.splice(action.id, 1, incomingTodoToUpdate);
            return {todos: copiedState}
        case actionTypes.DELETE_TODO:
            const copiedList = [...state.todos];
            copiedList.splice(action.id, 1);
            return {todos: copiedList}
        default: 
            return state;
    }
}