import React, {Component} from 'react';
const axios = require('axios');

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            trackingnumber: '',
            description: '',
            length: '',
            height: '',
            width: '',
            weight: '',
            origin: {},
            destination: '',
            status: '',
            type: '',
            date: '',
            email: ''
        };
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    userInputHandler = (e) => {
        this.state.origin[e.target.name] = e.target.value;
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.state.origin = Object.values(this.state.origin).join(';');
        axios.post('/createPackage', this.state).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    handlerForm = (e) => {
        document.getElementsByClassName("user-form")[0].style.visibility = "hidden";
        document.getElementsByClassName("package-form")[0].style.visibility = "visible";
        document.getElementsByClassName("user-form")[0].style.display = "none";
    }

    render(){
        const {trackingnumber, description, length, height, width, weight, origin, destination, status, type, date, email} = this.state;
        return(
            <form method="POST" onSubmit={this.submitHandler}>
                   <div class="user-form" className="user-form">
                    <div className="row">
                            <div>
                                <label for="inputEmail">Email address</label><br/>
                                <input name="email" type="email" className="form-control" id="inputEmail" placeholder="Enter your email" onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <label for="inputFirst" className="col-xs-6">First name</label>
                                <input name="first" type="text" className="form-control input-sm" id="inputFirst" placeholder="Enter your first name" onChange={this.userInputHandler}/><br/>
                            </div>
                            <div>
                                <label for="inputLast" class="col-xs-6">Last name</label>
                                <input name="last" type="text" className="form-control input-sm" id="inputLast" placeholder="Enter your last name" onChange={this.userInputHandler}/><br/>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div className="row">
                            <div>
                                <label for="inputOrigin">Origin Country</label>
                                <select name="origin" className="form-control" id="inputOrigin" value={origin} onChange={this.userInputHandler}>
                                    <option>Belgium</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <label for="inputAddress">Address</label>
                            <input name="address" type="text" className="form-control" id="inputAddress" placeholder="Enter address" onChange={this.userInputHandler}/><br/>
                        </div>
                        <label for="inputPostcode">Postcode</label>
                        <input name="postcode" type="text" className="form-control" id="inputPostcode" placeholder="Enter postcode" onChange={this.userInputHandler}/><br/>
                        <label for="inputNumber">Phone Number</label>
                        <input name="phoneNumber" type="text" className="form-control" id="inputNumber" placeholder="Enter phone number" onChange={this.userInputHandler}/><br/>
                        <button id="btnNextStep" className="btn btn-primary" onClick={this.handlerForm}>Next</button>
                   </div>
                   <div className="package-form">
                        <input name="trackingnumber" type="hidden" class="form-control" id="inputTrackingNumber" value={trackingnumber} /><br/>

                        <label for="inputDescription">Description</label>
                        <input name="description" type="text" class="form-control" id="inputDescription" placeholder="Enter Description" value={description} onChange={this.changeHandler}/><br/>
                        <label for="inputLength">Length</label>
                        <input name="length" type="text" class="form-control" id="inputLength" placeholder="Enter Length" value={length} onChange={this.changeHandler}/><br/>
                        <label for="inputHeight">Height</label>
                        <input name="height" type="text" class="form-control" id="inputHeight" placeholder="Enter Height" value={height} onChange={this.changeHandler}/><br/>
                        <label for="inputWidth">Width</label>
                        <input name="width" type="text" class="form-control" id="inputWidth" placeholder="Enter Width" value={width} onChange={this.changeHandler}/><br/>
                        <label for="inputWeight">Weight</label>
                        <input name="weight" type="text" class="form-control" id="inputWeight" placeholder="Enter Weight" value={weight} onChange={this.changeHandler}/><br/>
                        <label for="inputDestination">Destination</label>
                        <input name="destination" type="text" class="form-control" id="inputDestination" placeholder="Enter destination" value={destination} onChange={this.changeHandler}/><br/>

                        <input name="status" type="hidden" class="form-control" value="Order Receiving"/><br/>

                        <label for="inputType">Type</label>
                        <input name="Type" type="text" class="form-control" id="inputType" value="Express Delivery" readonly disabled/><br/>

                        <input name="date" type="date" class="form-control" value={date} onChange={this.changeHandler}/><br/>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div> 
            </form>
       );
    }
}

export default Form;