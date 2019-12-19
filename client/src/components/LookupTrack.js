import React, { Component } from "react";
import axios from "axios";
import TrackingNumberInput from "./TrackingNumberInput";
import TrackingNumberOutput from "./TrackingNumberOutput";

class Tracking extends Component {
  state = {
    data: [],
    dataReports: [],
    visible: false
  };
  getPacketData = e => {
    e.preventDefault();
    const trackingnumber = e.target.elements.trackingnumber.value;
    console.log(trackingnumber);
    axios
      .post(`/getPackageByTrackingNumber`, { trackingnumber: trackingnumber })
      .then(res => {
        console.log(res);
        if (res.data.length != 0){
          console.log('res is');
          console.log(res.data.length);
          this.setState({ data: res.data[0] });
          console.log(this.state.data);
          console.log(this.state.data[0]);
          this.state.visible = true; 
        } else this.state.visible = false; 
      });

      axios
      .post(`/getReportsByTrackingNumber`, { trackingnumber: trackingnumber })
      .then(res => {
        console.log('THIS IS THE SECOND AXIOS CALL');
        if (res.data.length != 0){
          console.log('HALLOOOOOOOOOOOOOO');
          this.setState({ dataReports: res.data});
          console.log(this.state.dataReports)

        } else this.state.visible = false; 
      });
  };

  render() {
    if (this.state.visible) {
      return (
        <div>
          <TrackingNumberOutput data={this.state.data} dataReports={this.state.dataReports} />
        </div>
      );
    } else
      return (
        <div>
          <TrackingNumberInput getPacketData={this.getPacketData} />
        </div>
      );
  }
}

export default Tracking;
