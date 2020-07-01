import React from 'react';
import './Header.css';
import Ads from './Ad'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;
