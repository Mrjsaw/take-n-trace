import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          First name : <br />
          <input type="text"></input>
          <br />
          Last Name : <br></br>
          <input type="text"></input>
          <br />
        </form>
      </div>
    );
  }
}

export default Form;
