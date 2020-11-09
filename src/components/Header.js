// import React, { Component } from 'react';

// class Header extends Component {
//   state = {
//     navLink: {

//     }
//   }
//   render() {
//     const headerStyle = {
//       padding: "20px 0",
//       lineHeight: "2em",
//     };
//     const navStyle = {
//       display: "flex",
//       padding: 0,
//     };
//     const listStyle = {
//       padding: 0,
//       margin: "10px",
//     };
//     return (
//       <header style={headerStyle}>
//         <h1>Todo List</h1>
//         <nav>
//           <ul style={navStyle}>
//             <li>ThisWeek</li>
//             <li>LastWeek</li>
//           </ul>
//         </nav>
//       </header>
//     )
//   }
// }

// export default Header;

// ------------------------------

import React, { useEffect, useRef } from 'react';

const Header = props => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }

  const isInitialMount = useRef(true);
  console.log(isInitialMount);

  useEffect(() => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    let bgColor = `rgb(${x},${y},${z})`;

    // default value of isInitialMount is true, 
    // and when the component has just mounted, 
    // immediately set the value to false. 
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // after mounting the component, else will be executed 
      document.getElementById('inH1').innerHTML = "clicked";
      document.getElementById("inH1").style.backgroundColor = bgColor;
    }
  }, [props.headerSpan])

  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
        Simple Todo App <span id="inH1"></span>
      </h1>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  )
}

export default Header;