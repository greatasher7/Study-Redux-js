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
const todoList = document.getElementById("todoList");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const updateTodo = (state = [], action) => {
  console.log("updated", action.text, state);
  switch (action.type){
    case ADD_TODO:
      return [action, ...state];  
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}
const todoStore = createStore(updateTodo);

// dispatch - state update
const addTodo = (text) => ({type: ADD_TODO, text, id: Date.now()})
const deleteTodo = (id) => ({type: DELETE_TODO, id})


const dispatchAddTodo = (text) => {
  todoStore.dispatch(addTodo(text));
}

const dispatchDeleteTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  todoStore.dispatch(deleteTodo(id));
} 

const handleSubmit = (e) => {
  e.preventDefault();
  const toDo = newTodo.value;
  newTodo.value = "";
  dispatchAddTodo(toDo);
}
formTodo.addEventListener('submit', handleSubmit);


// subscribe 
const paintTodo = () => {
  const toDos = todoStore.getState();
  todoList.innerText = "";
  toDos.forEach(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.addEventListener("click", dispatchDeleteTodo)
    btn.innerText = "DEL"
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    todoList.appendChild(li);
  });
}
todoStore.subscribe(paintTodo);


