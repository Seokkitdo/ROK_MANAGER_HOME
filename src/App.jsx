import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Update from './components/Update';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Update" component={Update} />
          <Route path="/news" component={News} />
          
        </div>
      </Router>
    );
  }
}

export default App;
