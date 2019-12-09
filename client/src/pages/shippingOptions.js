import React, { Component } from "react";
import Card from "../components/CardDeck";
import ShippingHeader from "../components/shippingHeader";

class ShippingOptions extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

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
            <p className="">{this.state.data}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingOptions;
