import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Dashboard from './modules/Dashboard';
import Payments from './modules/Payments';
import Header from './modules/Header';
import Login from './modules/Login';
import SideNavDrawer from './modules/SideNavDrawer';

function App() {
  return (
    // <Route path="/" exact />
    <Router>
      <Header />
      <SideNavDrawer />
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/payments' exact component={Payments}/>
      </Switch>
    </Router>
  );
}

export default App;
