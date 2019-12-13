import React, { Component } from "react";

class ShippingHeader extends Component {
  state = {
    data: null
  };

  render() {
    const headerStyle = {
      height: "65px",
      marginBottom: "80px",
      paddingTop: "30px",
      color: "white",
      fontFamily: "Lucida Sans",
      textAlign: "center"
    };

    return (
      <header>
        <h1 style={headerStyle}>Choose a Plan That Works Best For You</h1>
      </header>
    );
  }
}

export default ShippingHeader;
