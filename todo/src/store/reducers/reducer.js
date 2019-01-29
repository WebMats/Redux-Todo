import * as actionTypes from '../actions/actionTypes';


const mergeObject = (oldObject, incomingObject) => {
    return [
        ...oldObject,
		...incomingObject
    ]
}

const initialState = {
    todos: [
        {value: "Walk the dog.", completed: false}
    ]
}


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            const incomingTodo = {value: action.todo, completed: false};
            return {todos: mergeObject(state.todos, [incomingTodo])}
        case actionTypes.UPDATE_COMPLETED:
            const incomingIngredientToUpdate = {value: state.todos[action.id].value, completed: !state.todos[action.id].completed};
            const copiedState = [...state.todos];
            copiedState.splice(action.id, 1);
            return {todos: mergeObject(copiedState, [incomingIngredientToUpdate])}
        case actionTypes.DELETE_TODO:
            const copiedList = [...state.todos];
            copiedList.splice(action.id, 1);
            return {todos: copiedList}
        default: 
            return state;
    }
}