import React from 'react';
import './Main.css';


class Main extends React.Component {
    render() {
      return (
        <div className="main">
          main
          {this.props.children}
        </div>
      );
    }
  }

  export default Main;