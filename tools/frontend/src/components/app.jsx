import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router'

import Navbar from './navbar.jsx';
import NavLink from './nav.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <NavLink url="/equipment">Equipment</NavLink>
        </Navbar>

        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
