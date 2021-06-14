import {createStore} from "redux";


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


// store for state
const ADD = "add";
const MINUS = "minus";
const countModifier = (count = 0, action) => {
  switch (action.type){
    case ADD:
      return count + 1
    case MINUS:
      return count - 1
    default:
      return count;
  }
};

const countStore = createStore(countModifier);
number.innerHTML = 0;

// click Event 에 따라 state 변경 dispatch()
const handleAdd = () => {
  countStore.dispatch({type: ADD});
}
const handleMinus = () => {
  countStore.dispatch({type: MINUS});
}

add.addEventListener("click", handleAdd);

minus.addEventListener("click", handleMinus);
 


// state의 변화 감지하여 이에 대응한 코드 실행 subscribe()
const onChange = () => {
  number.innerHTML = countStore.getState();
}

countStore.subscribe(onChange);

// to do list
const newTodo = document.getElementById("newTodo");
const formTodo = document.getElementById("formTodo");
const addTodoBtn = document.getElementById("addTodo"); 
const deleteTodoBtn = document.getElementById("deleteTodo"); 
const todoList = document.getElementById("todoList");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const updateTodo = (state = [], action) => {
  console.log(action.todo, state);
  switch (action.type){
    case ADD_TODO:
      return [...state, action.todo];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}

const todoStore = createStore(updateTodo);


// subscribe
const onChangeTodo = () => {
  console.log("subscribe", todoStore.getState());
}

todoStore.subscribe(onChangeTodo);

// dispatch
const addTodo = (toDo) => {
  todoStore.dispatch({type: ADD_TODO, todo: toDo});
}

const handleSubmit = (e) => {
  e.preventDefault();
  const toDo = newTodo.value;
  newTodo.value = "";
  addTodo(toDo);
}
formTodo.addEventListener('submit', handleSubmit)




