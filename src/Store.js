import {createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";


// dispatch 안에 들어갈 callback 
const addTodo = text => {
    return {type: ADD, text, id: Date.now()};
}

// 인자로 들어가는 id 는 텍스트 so, 정수로 바꿔줌.
const deleteTodo = id => {
    return {type: DELETE, id};
}


// state 변경 
const reducer = (state = [], action) => {
    switch (action.type){
        case ADD:
            return [{text: action.text, id: action.id}, ...state];
        case DELETE:
            return state.filter(todo => todo.id !== action.id);
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
