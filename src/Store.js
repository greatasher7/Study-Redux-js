import {configureStore, createAction, createReducer, createSlice} from "@reduxjs/toolkit";

// dispatch의 인자로 들어가는 함수, createReducer & createAction (사용)

// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const reducer = createReducer([], {
//     [addTodo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteTodo]: (state, action) => {
//         return state.filter(todo => todo.id !== action.payload);
//     }
// });

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
});


const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
