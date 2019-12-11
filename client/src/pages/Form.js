import React, { Component } from "react";
import Form from "../components/FormComponent";

class InputForm extends Component {
  state = {
    data: null
  };

  render() {
    return (
      <div>
        <div className="container">
          <Form />
          <p className="">{this.state.data}</p>
        </div>
      </div>
    );
  }
}

export default InputForm;
