// import React, { Component } from "react";

// import { v4 as uuidv4 } from 'uuid';

// import Header from './Header';
// import TodosList from './TodosList';
// import InputTodo from './InputTodo';

// class TodoContainer extends Component {
//   state = {
//     todos: [
//       {
//         id: uuidv4(),
//         title: "Setup development environment",
//         completed: true
//       },
//       {
//         id: uuidv4(),
//         title: "Develop website and add content",
//         completed: false
//       },
//       {
//         id: uuidv4(),
//         title: "Deploy to live server",
//         completed: false
//       }
//     ],
//   };

//   handleChange = id => {
//     // console.log('clicked', id);
    
//     this.setState({
//       todos: this.state.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed;
//         }
//         return todo;
//       })
//     })
//   }

//   deleteTodo = id => {
//     console.log('deleted ', id);

//     this.setState({
//       todos: [
//         ...this.state.todos.filter(todo => {
//           return todo.id !== id;
//         })
//       ]
//     });
//   }

//   addTodo = title => {
//     // console.log(title);
//     const newTodo = {
//       id: uuidv4(), title: title, completed: false
//     };
//     this.setState({
//       todos: [...this.state.todos, newTodo]
//     });
//   }
  

//   render() {
//     return (
//       <div className="container">
//         <p>
//           This is a tutorial from{" "}
//           <a href="https://ibaslogic.com/react-tutorial-for-beginners/">
//             ibaslogic.com
//           </a>
//           .
//         </p>

//         <Header />
//         <InputTodo 
//           addTodo={this.addTodo}
//         />
//         <TodosList  
//           todos={this.state.todos} 
//           handleChange={this.handleChange} 
//           deleteTodo={this.deleteTodo}
//         />
//       </div>
//     );
//   }
// }

// export default TodoContainer;

import React, { useState, useEffect } from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';

import axios from 'axios';
// import uuid from 'uuid';
 import { v4 as uuidv4 } from 'uuid';

const TodoContainer = props => {
  const [todos, setTodos] = useState([]);
  // show <span> with random colored background
  const [show, setShow] = useState(false);

  // toggle checkbox true/false 
  const handleChange = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    )
    setShow(!show);
  }

  const deleteTodo = id => {
    setTodos([
      // return not deleted todo 
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  useEffect(() => {
    // console.log('test run');
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => setTodos(res.data))
  }, [])

  return (
    <div className="container">
      <Header headerSpan={show} />
      <InputTodo addTodo={addTodo} />
      <TodosList
        todos={todos}
        handleChange={handleChange}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default TodoContainer;