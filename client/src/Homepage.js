import React, { Component } from 'react';

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
