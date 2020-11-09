import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    // desctructure the todo and get variables from it 
    const { completed, id, title} = this.props.todo;
    return (
      <ul>
        <li className="todo-item">
          <input 
            type="checkbox" 
            checked={completed}
            onChange={() => this.props.handleChange(id)} 
          />
          <button
            onClick={() => this.props.deleteTodo(id)}
          >
            Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </li>
      </ul>
    );
  }
}

export default TodoItem;
