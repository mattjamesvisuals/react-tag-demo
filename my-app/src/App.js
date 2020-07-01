import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Aside from './components/Aside.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import {Helmet} from "react-helmet";
import Ad from './components/Ad';

const getFreestar = () => {
  return new Promise((resolve, reject) => {
    const maxTries = 10
    let retryCount = 0
    const waitForFreestarReady = setInterval(() => {
      if (window.freestar && window.googletag && window.googletag.apiReady) {
        clearInterval(waitForFreestarReady)
        resolve(window.freestar)
      } else if (retryCount === maxTries) {
        clearInterval(waitForFreestarReady)
        reject(`freestar NOT ready after ${maxTries} tries`)
      } else {
        retryCount++
      }
    }, 1000)
  })
}


class App extends Component {

  state = {
    adRefreshCount: 0,
    adUnits: []
  }

  componentDidMount() {
    getFreestar().then(() => {
      if (window.freestar && window.freestar.fsdata && window.freestar.fsdata.placements) {
        console.log("foobar");
        const adUnits = window.freestar.fsdata.placements.map(adUnit => {
          return {
            placementName: adUnit.name,
            slotId: adUnit.name,
            // targeting: ['value1', 'value2'] // optionally pass specific targeting
          };
        });
        this.setState({ adUnits })
      }

      // example of automatically refreshing an ad every 30 seconds a total of 5 times
      this.createAutoRefresh();
    })

  }

  createAutoRefresh = () => {
    const interval = setInterval(() => {
      const maxRefreshes = 5
      this.setState({
        adRefreshCount: this.state.adRefreshCount + 1
      }, () => {
        const { adRefreshCount } = this.state
        if (adRefreshCount === maxRefreshes) {
          clearInterval(interval)
        }
      })
    }, 30000)
  }

  render () {
    return (
      <div className="App">
      <Helmet>
        <script data-cfasync="false" type="text/javascript" src="/assets/header.js" />
        <meta charSet="utf-8" />
        <title>Example Ad Page</title>
      </Helmet>
      <div className="container">
        
        <Header>
        <Ad
            adSlot = {this.state.adUnits[1]}
            adRefreshCount = {this.state.adRefreshCount}
          >

          </Ad>
        </Header>
        <Nav/>
        <Main>
          <Ad
            adSlot = {this.state.adUnits[0]}
            adRefreshCount = {this.state.adRefreshCount}
          />
        </Main>
        <Aside>
        <Ad
            adSlot = {this.state.adUnits[3]}
            adRefreshCount = {this.state.adRefreshCount}
          />
        </Aside>
        <Nav>
        <Ad
            adSlot = {this.state.adUnits[2]}
            adRefreshCount = {this.state.adRefreshCount}
          >

          </Ad>
        </Nav>
        <Footer/>
      </div>
    </div>
    )
  }
  
    

}

export default App;
