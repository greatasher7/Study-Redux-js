import React, {useState} from "react";
import { connect } from "react-redux";
import {actionCreators} from "../Store";
import Todo from "../Components/Todo";


const Home = ({todos, addTodo}) => {

    // state text: 전체 데이터가 아닌 출력만을 위한 데이터
    const [text, setText] = useState("")
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

    return( 
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {todos.map(todo => <Todo key={todo.id} {...todo} />)}
            </ul>
        </>
    );
}

// --toProps state 관련 정보를 가져와서 해당 컴포넌트의 props로 준다
const mapStateToProps = (state) => {
    return { 
        todos: state 
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);