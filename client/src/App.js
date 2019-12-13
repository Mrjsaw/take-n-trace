import React, { Component } from "react";
import "./App.css";
import Tracking from './components/Tracking'
import LookupTrack from './components/LookupTrack'



class App extends Component {
  state = {
    data: null
  };

  render() {
    return (
      <div>
        <div className="Center">
          {/* <Tracking/> */}
          <LookupTrack />

        </div>
      </div>
    );
  }
}; 

export default App;

