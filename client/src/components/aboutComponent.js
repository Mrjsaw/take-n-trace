import DeliveryMan from "../img/deliveryMan.png";
import React, { Component } from "react";

class aboutBox extends Component {
  state = {};

  render() {
    const aboutStyle = {
      display: "inline-block",
      justifyContent: "center",
      width: "60%",
      height: "600px",
      margin: "auto",
      marginTop: "20px",
      padding: "15px",
      //color: "#114da8",
      color: "white",
      border: "6px solid grey",
      borderRadius: "10px",
      textAlign: "center",
      background:
        "linear-gradient(0deg, rgba(7,56,131,1) 0%, rgba(30,105,219,1) 100%)"
    };

    const imgBoxStyle = {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      justifyContent: "center"
    };

    const imgStyle = {
      margin: "30px",
      padding: "15px",
      display: "inline",
      border: "6px solid grey",
      borderRadius: "10px",
      maxWidth: "30%",
      maxHeight: "350px",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center"
    };

    const textStyle = {
      textAlign: "center",
      fontSize: "15px",
      color: "white"
    };

    const img = {
      width: "80%",
      height: "70%",
      borderRadius: "10px"
    };
    return (
      <div
        className="aboutBox"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <div style={aboutStyle}>
          <h1>About us</h1>
          <hr />

          <div className="aboutTextBox">
            <p>
              For all your import, export or domestic transport needs, shipments
              that weigh a lot or little, urgent shipments or shipments without
              time constraints, Take 'n Trace has all the solutions and offers
              reliable services you can count on.
            </p>
          </div>

          <div style={imgBoxStyle} className="container">
            <div style={imgStyle}>
              <div style={imgBoxStyle}>
                <img style={img} src={DeliveryMan}></img>
              </div>

              <hr />
              <p style={textStyle}>
                Rely on the power of Take 'n Trace to help your business grow.
                Our fast services and decades of experience connect you with
                people and opportunities around the world.
              </p>
            </div>

            <div style={imgStyle}>
              <div style={imgBoxStyle}>
                <img style={img} src={DeliveryMan}></img>
              </div>
              <hr />
              <p style={textStyle}>
                Take 'n Trace offers a wide range of services to meet your
                shipping needs, from and to multiple countries and territories.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default aboutBox;
