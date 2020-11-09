import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state.title);
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input 
          type="text" 
          className="input-text"
          placeholder="Add Todo.." 
          value={this.state.title}
          name="title"
          onChange={this.handleChange}
        />
        <button 
          type="submit"
          className="input-submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default InputTodo;
