import React from "react";
import {connect} from "react-redux";

const Detail = ({todos}) => {
    console.log(todos);
    return (
        <h1>{todos?.text}</h1>
        
    );
}

const mapStateToProps = (state, ownProps) => {
    const {match: {params: {id}}} = ownProps;
    return {todos: state.find(todo => todo.id === parseInt(id))}
}

export default connect(mapStateToProps) (Detail);

