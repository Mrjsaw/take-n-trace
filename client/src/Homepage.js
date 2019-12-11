import React, { Component } from 'react';
//import {Axios} from 'axios';

class About extends Component {

  
  render() {
    return (
        <div className="Center">
        <form>
          <input className="TrackNr" type="text" name="tracknr" placeholder="Tracking number"/>
          <input type="submit" value="Track" />
        </form>
      </div>
    );
  }
}

export default About;
