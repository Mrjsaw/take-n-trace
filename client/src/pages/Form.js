import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from '../components/FormComponent'

class InputForm extends Component {
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
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
<<<<<<< HEAD:client/src/Form.js
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
        <div>
            <header>
              <h1>Parcel shipping page</h1>
          </header>
        <div className="container">
          <Form />
          <p className="">{this.state.data}</p>
        </div>
=======
    return body;
  };

  render() {
    return (
      <div className="App">
        <div className="Center">
          <form>
            <input className="TrackNr" type="text" name="tracknr" placeholder="Tracking number"/>
            <input type="submit" value="Track" />
          </form>
>>>>>>> f402a9396ca5f97b2818167861f6590c1b6201d2:client/src/App.js
        </div>
      </div>
    );
  }
<<<<<<< HEAD:client/src/Form.js

export default InputForm;
=======
}
export default App;
>>>>>>> f402a9396ca5f97b2818167861f6590c1b6201d2:client/src/App.js
