import React, {Component} from 'react';
import Notfound from '../pages/Notfound';
import { AccordionCollapse } from 'react-bootstrap';
const axios = require('axios');


const generateLabel = function(type){
    // TO DO - request to db if tracking number already exist
    let trackingnumber = type.substring(0, 3);
    const length = 10;
    for(let i = 0; i < length; i++){
        trackingnumber += Math.floor(Math.random() * Math.floor(length)).toString();
    }
    return trackingnumber;
};


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
            originName: '',
            originStreet: '',
            originNumber: '',
            originZip: '',
            originCity: '',
            originCountry: '',
            destinationName: '',
            destinationStreet: '',
            destinationZip: '',
            destinationCity: '',
            destinationCountry: '',
            status: '',
            type: '',
            date: '',
            email: ''
        };
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.state.type = document.getElementsByName('type')[0].value;
        this.state.trackingnumber = generateLabel(this.state.type);
        let originCountry = document.getElementById("inputOriginCountry");
        let destinationCountry = document.getElementById("inputDestinationCountry");
        this.state.originCountry = originCountry.options[originCountry.selectedIndex].value;
        this.state.destinationCountry = destinationCountry.options[destinationCountry.selectedIndex].value;

        console.log(this.state);
        this.getTrackCode();
        // axios.post('/createPackage', this.state).then((res) => {
        //     console.log(res);
        //   }, (err) => {
        //     console.log(err);
        //   });
    }

    getTrackCode = () => {
        axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.state.trackingnumber}`).then((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }

    handlerForm = (e) => {
        document.getElementsByClassName("user-form")[0].style.visibility = "hidden";
        document.getElementsByClassName("package-form")[0].style.visibility = "visible";
        document.getElementsByClassName("user-form")[0].style.display = "none";
    }

    render(){
        const {trackingnumber, description, length, height, width, weight, originName, originCountry, originStreet, originNumber, originZip, originCity, destinationName, destinationStreet, destinationNumber, destinationZip, destinationCity, destinationCountry, status, type, date, email} = this.state;
        const types = ["EXPRESS", "ECONOMY", "INTERNATONAL"];
        if(!types.includes(this.props.search.type)){
           console.log("hey");
            return <Notfound/>;
       }
        return(
            <form method="POST" onSubmit={this.submitHandler}>
                   <div className="user-form input-form">
                       <h1>Origin</h1>
                        <div className="row">
                            <div>
                                <label for="inputEmail">Email address</label><br/>
                                <input name="email" type="email" className="form-control" id="inputEmail" placeholder="Enter your email" value={email} onChange={this.changeHandler}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label for="InputOriginName" >Full name</label>
                                <input name="originName" type="text" className="form-control input-sm" id="InputOriginName" placeholder="Enter your full name" value={originName} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label for="inputOriginCountry">Country</label>
                                <select name="originCountry" className="form-control" id="inputOriginCountry">
                                    <option>Belgium</option>
                                </select>
                            </div>
                            <div className="col-xs-6">
                                <label for="inputOriginCity">City</label>
                                <input name="originCity" type="text" className="form-control" id="inputOriginCity" placeholder="Enter city" value={originCity} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label for="inputOriginStreet">Street</label>
                                <input name="originStreet" type="text" className="form-control" id="inputOriginStreet" placeholder="Enter street" value={originStreet} onChange={this.changeHandler}/><br/>
                            </div>
                            <div className="col-xs-6">
                                <label for="inputOriginNumber">Number</label>
                                <input name="originNumber" type="text" className="form-control" id="inputOriginNumber" placeholder="Enter number" value={originNumber} onChange={this.changeHandler}/><br/>
                            </div>
                            <div className="col-xs-6">
                                <label for="inputOriginZip">Zip</label>
                                <input name="originZip" type="text" className="form-control" id="inputOriginZip" placeholder="Enter Zip" value={originZip} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>

                        <h1>Recipient</h1>
                        <div className="row">
                            <div className="col-xs-6">
                                <label for="inputDestinationName" >Full name</label>
                                <input name="destinationName" type="text" className="form-control input-sm" id="inputDestinationName" placeholder="Enter your full name" value={destinationName} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label for="inputDestinationCountry">Country</label>
                                <select name="destinationCountry" className="form-control" id="inputDestinationCountry">
                                    <option>Belgium</option>
                                </select>
                            </div>
                            <div className="col-xs-6">
                                <label for="inputDestinationCity">City</label>
                                <input name="destinationCity" type="text" className="form-control" id="inputDestinationCity" placeholder="Enter city" value={destinationCity} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label for="inputDestinationStreet">Street</label>
                                <input name="destinationStreet" type="text" className="form-control" id="inputDestinationStreet" placeholder="Enter street" value={destinationStreet} onChange={this.changeHandler}/><br/>
                            </div>
                            <div className="col-xs-6">
                                <label for="inputDestinationNumber">Number</label>
                                <input name="destinationNumber" type="text" className="form-control" id="inputDestinationNumber" placeholder="Enter number" value={destinationNumber} onChange={this.changeHandler}/><br/>
                            </div>
                            <div className="col-xs-6">
                                <label for="inputDestinationZip">Zip</label>
                                <input name="destinationZip" type="text" className="form-control" id="inputDestinationZip" placeholder="Enter Zip" value={destinationZip} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>
                        <button id="btnNextStep" className="btn btn-primary" onClick={this.handlerForm}>Next</button>   
                   </div>
                   


                   <div className="package-form input-form">
                        <input name="trackingnumber" type="hidden" className="form-control" id="inputTrackingNumber" value={trackingnumber} /><br/>

                        <label for="inputDescription">Description</label>
                        <input name="description" type="text" className="form-control" id="inputDescription" placeholder="Enter Description" value={description} onChange={this.changeHandler}/><br/>
                        <label for="inputLength">Length</label>
                        <input name="length" type="text" className="form-control" id="inputLength" placeholder="Enter Length" value={length} onChange={this.changeHandler}/><br/>
                        <label for="inputHeight">Height</label>
                        <input name="height" type="text" className="form-control" id="inputHeight" placeholder="Enter Height" value={height} onChange={this.changeHandler}/><br/>
                        <label for="inputWidth">Width</label>
                        <input name="width" type="text" className="form-control" id="inputWidth" placeholder="Enter Width" value={width} onChange={this.changeHandler}/><br/>
                        <label for="inputWeight">Weight</label>
                        <input name="weight" type="text" className="form-control" id="inputWeight" placeholder="Enter Weight" value={weight} onChange={this.changeHandler}/><br/>

                        <input name="status" type="hidden" className="form-control" value="Order Receiving"/><br/>

                        <label for="inputType">Type</label>
                        <input name="type" type="text" className="form-control" id="inputType" value={this.props.search.type} readOnly disabled/><br/>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div> 
            </form>
       );
    }
}

export default Form;