import React, { Component } from 'react';
import '../styles/App.css'
import logo from '../logo.svg';

class NavBar extends Component {
  render() {
      return(
      <div className="App App-header navbar navbar-inverse bg-primary">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Play What?!</h1>
      </div>
      )
  }
}
export default NavBar;