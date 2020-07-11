import React, { Component,Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Update_content from './components/Update_content';
import Update from './components/Update';
import News from './components/News';
import Footer from './components/Footer';
import Navbar from './components/CustomNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from './api';

class App extends Component {
  render() {
    return (
      <Fragment>
      <Router>
        <div style={{minHeight:"100%"}}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Update" component={Update} />
          <Route path="/news" component={News} />
          <Route path="/Update_content/:boardnum" component={Update_content} />
        </div >
      
      </Router>
        <Footer></Footer>
        </Fragment>
      
      
    );
  }
}

export default App;
