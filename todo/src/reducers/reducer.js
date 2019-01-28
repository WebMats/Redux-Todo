import * as actionTypes from '../actions/actionTypes';


const initialState = {
    todos: [
        {value: "Walk the dog.", completed: false}
    ]
}

export default (state = initialState, action) => {
    switch (action.key) {

        default: 
            return state;
    }
}