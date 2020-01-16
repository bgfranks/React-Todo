import React, { Component } from 'react';
import styled from 'styled-components';
import './hover.css'

const Form = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;

  input {
    background-color: #0353A4;
    border: 0;
    padding: 6px ;
    font-size: 1rem;
    width: 240px;
    outline: 0;
    color: #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    margin-right: 8px;
  }

  button {
    padding: 5px 30px;
    margin-left: 20px;
    font-size: 1rem;
    border: none;
  }
`

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
    }
  }

  handleChange = e => {
    this.setState({ ...this.state, newItem: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewItem(this.state.newItem);
    this.setState({
      newItem: ""
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          onChange={this.handleChange}
          type="text"
          name="item"
          value={this.state.newItem}
        />
        <button className="hvr-bob hvr-bounce-to-top">Add</button>
      </Form>
    )
  }

}

export default TodoForm;