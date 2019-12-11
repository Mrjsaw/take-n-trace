import React, { Component } from "react";
import Form from "../components/FormComponent";
import "../form.css";

const axios = require("axios");

class InputForm extends Component {
  state = {
    data: null
  };

  render() {
    return (
      <div>
        <div className="container">
          <Form />
        </div>
      </div>
    );
  }
}

export default InputForm;
