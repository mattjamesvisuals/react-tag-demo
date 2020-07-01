import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
      return (
        <div className="nav">
          <div>Left Rail</div> 
          {this.props.children}
        </div>
      );
    }
  }

  export default Nav;