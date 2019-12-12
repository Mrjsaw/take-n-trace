import React, { Component } from 'react';
import Form from '../components/FormComponent';
import '../form.css';

const queryString = require('query-string');
const axios = require('axios');

class InputForm extends Component {
  state = {
    data: null
  };
  

  render() {
    return (
      <div>
        <div className="container">
          <Form search={queryString.parse(this.props.location.search)}/>
        </div>
      </div>
    );
  }
}


export default InputForm;
