import React, { Component } from "react";

class ShippingHeader extends Component {
  state = {
    data: null
  };

  render() {
    const headerStyle = {
      height: "65px",
      marginBottom: "100px",
      paddingTop: "20px"
    };

    return (
      <header>
        <h1 style={headerStyle}>Choose a Plan That Works Best For You</h1>
      </header>
    );
  }
}

export default ShippingHeader;
