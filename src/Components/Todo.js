import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { remove } from "../Store";

const Todo = ({text, id, onBtnClick}) => {
    return (
      <li>
          <Link to={`/${id}`}>{text}</Link>
          <button onClick={onBtnClick}>DEL</button>
      </li>  
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onBtnClick: () => dispatch(remove(ownProps.id))
    }
}


export default connect(null, mapDispatchToProps) (Todo);