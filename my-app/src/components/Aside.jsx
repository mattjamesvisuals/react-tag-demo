import React from 'react';
import './Aside.css';
import Ads from './Ads.jsx';

class Aside extends React.Component {
    render() {
      return (
        <div className="aside">
          Right Rail 
          <Ads />
        </div>
      );
    }
  }

  export default Aside;