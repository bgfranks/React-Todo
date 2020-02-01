// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;

  button {
    font-size: 1rem;
    padding: 5px 10px;
    border: none;
    margin-top: 50px;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <ListContainer>
      <List>
        {props.todo.map(item => (
          <Todo
            key={item.id}
            item={item}
            toggleDone={props.toggleDone}
          />
        ))}
      </List>
      <button className="hvr-bob hvr-bounce-to-top" onClick={props.clearDone}>
        Clear Todo List
      </button>
    </ListContainer>
  );
};

export default TodoList;