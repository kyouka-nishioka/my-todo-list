import React, { Component } from 'react';

class Header extends Component {
  state = {
    navLink: {

    }
  }
  render() {
    const headerStyle = {
      padding: "20px 0",
      lineHeight: "2em",
    };
    const navStyle = {
      display: "flex",
      padding: 0,
    };
    const listStyle = {
      padding: 0,
      margin: "10px",
    };
    return (
      <header style={headerStyle}>
        <h1>Todo List</h1>
        <nav>
          <ul style={navStyle}>
            <li>ThisWeek</li>
            <li>LastWeek</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;