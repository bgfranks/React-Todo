import React from "react";
import './Todo.css'

const Todo = props => {
  return (
    <div
      onClick={event => props.toggleDone(props.item.id)}
      className={`item${props.item.complete ? " complete" : ""}`}
    >
      <p>{props.item.name}</p>
      <p>{props.item.complete}</p>
    </div>
  );
};

export default Todo;