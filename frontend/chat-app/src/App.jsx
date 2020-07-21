import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Chat from "./components/Chat";



export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/chat/:id" exact component={Chat} />
          </Switch>
        </Router>
      </>
    );
  }
}
