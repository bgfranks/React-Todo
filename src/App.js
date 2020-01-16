import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import './App.css'
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #0353A4;
  height: 100vh;
  color: #f3f3f3;

  h2 {
    font-size: 2.5rem;
    padding: 0 0 80px;
  }
`

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    todoList: [{
      name: "Wake Up",
      complete: true,
      id: 0
    }]
  }

  addNewItem = newItemName => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { name: newItemName, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  toggleDone = id => {
    console.log("task completed")
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          };
        }
        return item;
      })
    };
    this.setState(newState);
  };

  clearDone = () => {
    // console.log(this.state.todoList)
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return !item.complete;
        // console.log(!item.complete)
      })
    };

    // console.log(newState)
    this.setState(newState);
  };


  render() {
    return (
      <AppContainer>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} />
        <TodoList
          todo={this.state.todoList}
          toggleDone={this.toggleDone}
          clearDone={this.clearDone}
        />
      </AppContainer>
    );
  }
}

export default App;
