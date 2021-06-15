import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";


// dispatch 안에 들어갈 callback 
const addTodo = text => {
    return {type: ADD, text};
}
const deleteTodo = id => {
    return {type: DELETE, id};
}


// state 변경 
const reducer = (state = ["default state"], action) => {
    console.log(typeof state)
    switch (action.type){
        case ADD:
            return [{text: action.text, id: action.id}, ...state];
        case DELETE:
            return state.filter(todo => todo !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addTodo,
    deleteTodo
}

export default store;
