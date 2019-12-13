import React, { Component } from "react";
import Card from "../components/CardDeck";
import ShippingHeader from "../components/shippingHeader";

class ShippingOptions extends Component {

  render() {
    const backgroundStyle = {
      background: `rgb(7, 56, 131)`,
      backgroundColor: `linear-gradient(0deg, rgba(7,56,131,1) 0%, rgba(30,105,219,1) 100%)`,
      height: "300px"
    };

    return (
      <div style={backgroundStyle}>
        <ShippingHeader />
        <div>
          <div className="container">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingOptions;
