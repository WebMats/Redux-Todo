import * as actionTypes from './actionTypes';

export const addTodo = (todo) => {
        return {
            type: actionTypes.ADD_TODO,
            todo: todo
        }
    }