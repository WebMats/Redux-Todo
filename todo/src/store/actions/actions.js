import * as actionTypes from './actionTypes';

export const addTodo = (todo) => {
        return {
            type: actionTypes.ADD_TODO,
            todo: todo
        }
    }

export const updateCompleted = (id) => {
    return {
        type: actionTypes.UPDATE_COMPLETED,
        id: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: actionTypes.DELETE_TODO,
        id: id
    }
}