import * as actionTypes from '../actions/actionTypes';


const initialState = {
    todos: [
        {value: "Walk the dog.", completed: false}
    ]
}



export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            const copiedState = [...state.todos];
            const newTodo = {value: action.todo, completed: false};
            copiedState.push(newTodo);
            return {todos: copiedState}
        default: 
            return state;
    }
}