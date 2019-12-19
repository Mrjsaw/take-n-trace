import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Processing from "../img/Delivered.png";
import PickUp from "../img/PickUp.png";
import Transit from "../img/Transit.png";
import Delivery from "../img/Delivery.png";
import Delivered from "../img/Delivered.png";

function getLogo(status) {
  switch (status) {
    case "Processing":
      return Processing;
    case "PickUp":
      return PickUp;
    case "Transit":
      return Transit;
    case "Delivery":
      return Delivery;
    case "Delivered":
      return Delivered;
  }
}

function getStep(status) {
  switch (status) {
    case "Processing":
      return "Step 1 of 5";
    case "PickUp":
      return "Step 2 of 5";
    case "Transit":
      return "Step 3 of 5";
    case "Delivery":
      return "Step 4 of 5";
    case "Delivered":
      return "Step 5 of 5";
  }
}

class TrackingNumberOutput extends Component {
  state = {
    dataReports: this.props.dataReports
  };

  render() {
    return (
      <div style={{ marginTop: "200px" }}>
        <Card bg="primary" text="white" className="text-center">
          <Card.Header style={{ fontWeight: "bold" }}>
            {this.props.data.trackingnumber}
          </Card.Header>
          <Card.Header>
            {getStep(this.props.data.status)}: {this.props.data.status}
            <br></br>
            <img src={getLogo(this.props.data.status)} /> <br></br>
            Type: {this.props.data.type}
            <br></br>
            {this.props.data.date}
            <br></br>
          </Card.Header>

          <Card.Header>
            <Card.Title style={{ color: "black" }}>Updates</Card.Title>
            <Card.Header>
              <Card.Text>
                <ul>
                  {this.state.dataReports.map(function(arrItem, index) {
                    return (
                      <p key={index}>
                        {arrItem.date
                          .replace("T", " ")
                          .replace("Z", " ")
                          .substring(0, arrItem.date.length - 8)}{" "}
                        - {arrItem.status}
                      </p>
                    );
                  })}
                </ul>
              </Card.Text>
            </Card.Header>
          </Card.Header>

          <Card.Body>
            <Card.Title style={{ color: "black" }}>Description</Card.Title>
            <Card.Header>
              <Card.Text>
                {this.props.data.description} weighting {this.props.data.weight}{" "}
                lbs <br></br>
                Dimensions: {this.props.data.length}x{this.props.data.height}x
                {this.props.data.width}
              </Card.Text>
            </Card.Header>
            <Card.Title style={{ color: "black" }}>From:</Card.Title>
            <Card.Header>
              <Card.Text>
                {this.props.data.originStreet} {this.props.data.originNumber}{" "}
                <br></br>
                {this.props.data.originZip} {this.props.data.originCity}{" "}
                <br></br>
                {this.props.data.originCountry}
              </Card.Text>
            </Card.Header>
            <Card.Title style={{ color: "black" }}>To:</Card.Title>
            <Card.Header>
              <Card.Text>
                {this.props.data.destinationStreet}{" "}
                {this.props.data.destinationNumber} <br></br>
                {this.props.data.destinationZip}{" "}
                {this.props.data.destinationCity} <br></br>
                {this.props.data.destinationCountry}
              </Card.Text>
            </Card.Header>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TrackingNumberOutput;
