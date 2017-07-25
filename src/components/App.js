import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';

class App extends Component {
  render() {
    return (
      <div className="root">
          <NavBar />
          <div className="section">
            <PlayListForm />
            <PlayList />
          </div>
      </div>
    );
  }
}

export default App;
