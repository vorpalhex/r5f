import React from 'react';
import { Link } from 'react-router'

class Nav extends React.Component {
  render() {
    return (
      <li><Link to={this.props.url}>{this.props.children}</Link></li>
    )
  }
}

export default Nav;
