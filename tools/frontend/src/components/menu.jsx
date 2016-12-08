import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router'

class Menu extends React.Component {
  render() {
    return (
      <div>
      <ul>
        <li key="Equipment"><Link to={"/equipment"}>Equipment</Link></li>
      </ul>
      {this.props.children}
      </div>
    )
  }
}

export default Menu;
