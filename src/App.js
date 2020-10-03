import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import IntroSection from "./components/IntroSection"
import MultiForm from "./components/MultiForm"

class App extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
        </header>
        <div className="container">
          <div className="card">
            <h1>CV BUILDER</h1>
          </div>
        </div>
        <IntroSection sectionName="Personal Info" />
        <MultiForm sectionName="Education"/>
        <MultiForm sectionName="Work"/>
        {/*
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
        */}
      </div>
    );
  }
}

export default App;

/*
COMPONENTS:
  general info
  education experience
  work experience

Edit and submit button 
*/