import React, { Component } from "react";
import "./App.css";
import Tracking from './components/Tracking'



class App extends Component {
  state = {
    data: null
  };

  render() {
    return (
      <div>
        <div className="Center">
          <Tracking />

        </div>
      </div>
    );
  }
}; 

export default App;

