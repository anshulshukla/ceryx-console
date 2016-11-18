import React from 'react';
import {ReactDOM, render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App';
import './index.css';
import Login from './components/login/login.js';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
    	<Route path="login" component= {Login} />
    </Route>
  </Router>
), document.getElementById('root'))