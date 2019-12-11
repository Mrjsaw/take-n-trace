import React, { Component } from 'react';
import { Form, InputGroup} from 'react-bootstrap';
import axios from 'axios';

class Tracking extends Component {

    constructor(props) {
        super(props);
        this.state = { trackingnumber: '', tracking: null};
    }


    submitHandler = (event) => {
        event.preventDefault();
        axios.post(`/getPackageByTrackingNumber`, ({trackingnumber: this.state.trackingnumber}))
          .then(res => {
            console.log(res.data[0].status);
            this.setState({ tracking: res.data[0].status });
            alert("Your package is: " + this.state.tracking);
          }) 
    }

    changedHandler = (event) => {
        this.setState({ trackingnumber: event.target.value });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <InputGroup className="mb-3">
                        <input type="text" id="trackingnumber" placeholder="Tracking number" onChange={this.changedHandler} />
                        <InputGroup.Append>
                            <button type="submit" className="btn btn-primary">Track</button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        );
    }
}

export default Tracking;