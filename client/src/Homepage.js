import React, { Component } from 'react';
import axios from "axios";
import Input from './Components/Input';
import Output from './Components/Output';

class Homepage extends Component {

  state = {
    data: []
  }
  getPacketData = (e) => {
    e.preventDefault();
    const id = e.target.elements.id.value;
    console.log(id;
    axios.get(`getPackageByTrackingNumber/${id}`)
    .then((res) => {
      console.log(res);
      this.setState( {data : res.data})
    })
  }

  render() {
    return (
        <div>
          <Input getPacketData={this.getPacketData}/>
          <Output data={this.state.data}/>
        </div>
    );
  }
}

export default Homepage;
