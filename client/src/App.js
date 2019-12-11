import React, { Component } from 'react';
import Tracking from './components/Tracking'
import './App.css';


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
}
export default App;