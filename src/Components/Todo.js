import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "../Store";

const Todo = ({text, id, onBtnClick}) => {
    return (
      <li>
          <Link to={`/${id}`}>{text} <button onClick={onBtnClick}>DEL</button></Link>
      </li>  
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
    }
}


export default connect(null, mapDispatchToProps) (Todo);