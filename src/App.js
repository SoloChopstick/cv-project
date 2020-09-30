import React from 'react';
import logo from './logo.svg';
import './App.css';

import Section from "./components/Section"
import General from "./components/General"
import Work from "./components/Work"
import Education from "./components/Education"
import MultiForm from "./components/MultiForm"

function App() {
  return (
    <div className="App">
      <Section name="General"/>
      <Section />
      <Section />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*
COMPONENTS:
  general info
  education experience
  work experience

Edit and submit button 
*/