import React from 'react';
import './Aside.css';

class Aside extends React.Component {
    render() {
      return (
        <div className="aside">
          Right Rail 
          {this.props.children}
        </div>
      );
    }
  }

  export default Aside;