import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Aside from './components/Aside.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import {Helmet} from "react-helmet";
import Ads from './components/Ads'

function App() {
  return (
    <div className="App">
      <Helmet>
        <script data-cfasync="false" type="text/javascript" src="/assets/header.js" />
        <meta charSet="utf-8" />
        <title>Example Ad Page</title>
      </Helmet>
      <div className="container">
        
        <Header/>
        <Nav/>
        <Main>
          <Ads/>
        </Main>
        <Aside/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
