import React, { Component } from "react";

import { v4 as uuidv4 } from 'uuid';

import Header from './Header';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ],
  };

  handleChange = id => {
    // console.log('clicked', id);
    
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  deleteTodo = id => {
    console.log('deleted ', id);

    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  }

  addTodo = title => {
    // console.log(title);
    const newTodo = {
      id: uuidv4(), title: title, completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  

  render() {
    return (
      <div className="container">
        <p>
          This is a tutorial from{" "}
          <a href="https://ibaslogic.com/react-tutorial-for-beginners/">
            ibaslogic.com
          </a>
          .
        </p>

        <Header />
        <InputTodo 
          addTodo={this.addTodo}
        />
        <TodosList  
          todos={this.state.todos} 
          handleChange={this.handleChange} 
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
