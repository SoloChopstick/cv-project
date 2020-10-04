import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MultiForm from "./components/MultiForm"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isSubmitted: false,
    }
  }

  handleClick = (e) => {
    this.setState({
      isSubmitted: true
    })

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
          <div className="card-body">
            <MultiForm />
          </div>
        </div>
        <footer>
        </footer>
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