import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import IntroSection from "./components/IntroSection"
import MultiForm from "./components/MultiForm"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      education: {
        schoolName: "",
        majorName: "",
        startDate: "",
        endDate: ""
      },
      work: {
        companyName: "",
        jobName: "",
        startDate: "",
        endDate: ""
      }
    }
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
        <MultiForm sectionName="Education" data={this.state.education}/>
        <MultiForm sectionName="Work" data={this.state.work}/>
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