import React, { Component } from 'react';
import Form from '../components/FormComponent'
import '../form.css';

class InputForm extends Component {
  state = {
    data: null
  };

  axios.get('/getPackages')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  render() {
    return (
      <div>
          <header>
            <h1>Parcel shipping page</h1>
        </header>
        <div className="container">
          <Form/>
          <p className="">{this.state.data}</p>
        </div>
      </div>
    );
  }
}


export default InputForm;
