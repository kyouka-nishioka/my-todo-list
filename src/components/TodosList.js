import React, { Component } from "react";

import TodoItem from "./TodoItem";

class TodosList extends Component {
  render() {
    return (
      <>
        {this.props.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            handleChange={this.props.handleChange}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </>
    );
  }
}
/**
const TodoList = props => {
  return (
    <>
      {this.props.todos.map(todo => (
        <TodoItem 
          key={todo,id}
          todo={todo}
          handleChange={this.props.handleChange}
          deleteTodo={this.props.deleteTodo}
        />
      ))}
    </>
  )
}
 */

export default TodosList;
