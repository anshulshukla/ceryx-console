import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <div className="logo">CERYX</div>
            <div className="nav-wrapper">
                <ul className="nav-box">
                  <li>Target Set</li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
        <div className="App-intro">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
