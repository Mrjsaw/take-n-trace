import React, {Component} from 'react';
import Notfound from '../pages/Notfound';
import { AccordionCollapse } from 'react-bootstrap';
import  { Redirect } from 'react-router-dom';
const axios = require('axios');
const jsPDF = require('jspdf');

function isUndefined(value){
    var undefined = void(0); // returns value of undefined
    return value === undefined;
}

// const testfunction = () => {
//     // autocomplete generator htmlFor address
//     // Returns a list of potential address
//     axios.get(`http://autocomplete.geocoder.ls.hereapi.com/6.2/?apikey=${API_KEY}
//         &query=hannuitsesteenweg
//         &beginHighlight=<b>
//         &endHighlight=</b>`).then((res) => {
//             console.log(res);
//         }).catch((err) => {
//             console.log(err);
//             // TO FIX: Gives a network error
//         });

//     axios.get().then((res) => {
//         console.log(res);
//     }).catch((err) => console.log(err));
// };


const generateLabel = function(type){
    // TO DO - move this function to backend
    // TO DO - check request to DB - if trackingnr already exist
    let trackingnumber = type.substring(0, 3);
    const length = 10;
    for(let i = 0; i < length; i++){
        trackingnumber += Math.floor(Math.random() * Math.floor(length)).toString();
    }
    return trackingnumber;
};

let info = [];

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            error: false,
            checked: false,
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


    setRedirect = () => {
        this.setState({
            redirect: true
        })
    };

    isDisabled = () => {
        const errors = this.validate(this.state);
        info = Object.values(errors).filter(value => value[0] == false).map(value => <li>{value[1]}</li>);
        console.log(info);
        return Object.values(errors).some((value) => value[0] == false);
    }

    submitHandler = (e) => {
        e.preventDefault();
        if(this.isDisabled() == true || !this.state.checked){
            return;
        }

        this.state.type = document.getElementsByName('type')[0].value;
        this.state.trackingnumber = generateLabel(this.state.type);
        let originCountry = document.getElementById("inputOriginCountry");
        let destinationCountry = document.getElementById("inputDestinationCountry");
        this.state.originCountry = originCountry.options[originCountry.selectedIndex].value;
        this.state.destinationCountry = destinationCountry.options[destinationCountry.selectedIndex].value;

        console.log(this.state);
        axios.post('/createPackage', this.state).then((res) => {
          }, (err) => {
                // TO DO - Redirect to internal error page => If internal server error
                this.setState({error: true});

          });
        this.setState({
            redirect: true
        });
     
    }


    handlerForm = (e) => {
        document.getElementsByClassName("user-form")[0].style.visibility = "hidden";
        document.getElementsByClassName("package-form")[0].style.visibility = "visible";
        document.getElementsByClassName("user-form")[0].style.display = "none";
    }

    handleBlur = (e) => {
        let errors = this.validate();
        if(!errors[e.target.name][0]){
            document.getElementsByName(e.target.name)[0].style.borderColor = "red";
        }else{
            document.getElementsByName(e.target.name)[0].style.borderColor = "green";
        }
    }

    handleCheck = (e) => {
        this.setState({checked: true});
    }

    validate(){
        let match = /^[a-z ,.'-]+$/i;
        let emailMatch = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return {
            email: [emailMatch.test(this.state.email), "Email must be valid."],
            description: [this.state.description.length > 0, "Description must be filled"],
            length: [this.state.length <= 300 && this.state.length > 0, "Length must be less or equal to 300 cm"],
            height: [this.state.height <= 300 && this.state.height > 0, "Height must be less or equal to 300 cm"],
            width:  [this.state.width <= 300 && this.state.width > 0, "Width must be less or equal to 300 cm"],
            weight: [this.state.weight <= 75 && this.state.weight > 0, "Weight must be less or equal to 75 kilograms"],
            originName: [this.state.originName.length > 0 && match.test(this.state.originName), "The origin name should be valid (containing only letter)"],
            destinationName: [this.state.destinationName.length > 0 && match.test(this.state.destinationNamex), "The destination name should be valid (containing only letter)"]
        }
    }
    

    render(){
        const {trackingnumber, description, length, height, width, weight, originName, originStreet, originNumber, originZip, originCity, destinationName, destinationStreet, destinationNumber, destinationZip, destinationCity, email} = this.state;
        const types = ["EXPRESS", "ECONOMY", "INTERNATONAL"];
        const redirect = this.state.redirect;
        const error = this.state.error;

   

        if(!isUndefined(this.props.search)){
            if(!types.includes(this.props.search.type)){
                return <Notfound/>;
            }
        }

       if(redirect){
           return <Redirect to={{
            pathname: '/payment',
            state: {trackingumber: this.state.trackingnumber}
        }} />;
       }

       if(error){
            console.log("hello");
            return <Redirect to={{
                pathname: '/error'
            }} />;
    }
        return(
            <form method="POST" id="createform" onSubmit={this.submitHandler}>
                   <div className="user-form input-form">
                       <h1>Origin</h1>
                        <div className="row">
                            <div>
                                <label htmlFor="inputEmail">Email address</label><br/>
                                <input name="email" type="email" className="form-control" id="inputEmail" data-testid="inputEmail" placeholder="Enter your email" value={email} onChange={this.changeHandler} onBlur={this.handleBlur}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label htmlFor="InputOriginName" >Full name</label>
                                <input name="originName" type="text" className="form-control input-sm" id="InputOriginName" placeholder="Enter your full name" value={originName} onChange={this.changeHandler} onBlur={this.handleBlur}/><br/>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label htmlFor="inputOriginCountry">Country</label>
                                <select name="originCountry" className="form-control" id="inputOriginCountry">
                                    <option>Belgium</option>
                                </select>
                            </div>
                            <div className="col-xs-6">
                                <label htmlFor="inputOriginCity">City</label>
                                <input name="originCity" type="text" className="form-control" id="inputOriginCity" placeholder="Enter city" value={originCity} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label htmlFor="inputOriginStreet">Street</label>
                                <input name="originStreet" type="text" className="form-control" id="inputOriginStreet" placeholder="Enter street" value={originStreet} onChange={this.changeHandler}/><br/>
                            </div>
                            <div className="col-xs-6">
                                <label htmlFor="inputOriginNumber">Number</label>
                                <input name="originNumber" type="text" className="form-control" id="inputOriginNumber" placeholder="Enter number" value={originNumber} onChange={this.changeHandler}/><br/>
                            </div>
                            <div className="col-xs-6">
                                <label htmlFor="inputOriginZip">Zip</label>
                                <input name="originZip" type="text" className="form-control" id="inputOriginZip" placeholder="Enter Zip" value={originZip} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>

                        <h1>Recipient</h1>
                        <div className="row">
                            <div className="col-xs-6">
                                <label htmlFor="inputDestinationName" >Full name</label>
                                <input name="destinationName" type="text" className="form-control input-sm" id="inputDestinationName" placeholder="Enter your full name" value={destinationName} onChange={this.changeHandler} onBlur={this.handleBlur}/><br/>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label htmlFor="inputDestinationCountry">Country</label>
                                <select name="destinationCountry" className="form-control" id="inputDestinationCountry">
                                    <option>Belgium</option>
                                </select>
                            </div>
                            <div className="col-xs-6">
                                <label htmlFor="inputDestinationCity">City</label>
                                <input name="destinationCity" type="text" className="form-control" id="inputDestinationCity" placeholder="Enter city" value={destinationCity} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6">
                                <label htmlFor="inputDestinationStreet">Street</label>
                                <input name="destinationStreet" type="text" className="form-control" id="inputDestinationStreet" placeholder="Enter street" value={destinationStreet} onChange={this.changeHandler}/><br/>
                            </div>
                            <div className="col-xs-6">
                                <label htmlFor="inputDestinationNumber">Number</label>
                                <input name="destinationNumber" type="text" className="form-control" id="inputDestinationNumber" placeholder="Enter number" value={destinationNumber} onChange={this.changeHandler}/><br/>
                            </div>
                            <div className="col-xs-6">
                                <label htmlFor="inputDestinationZip">Zip</label>
                                <input name="destinationZip" type="text" className="form-control" id="inputDestinationZip" placeholder="Enter Zip" value={destinationZip} onChange={this.changeHandler}/><br/>
                            </div>
                        </div>
                        <button id="btnNextStep" className="btn btn-primary" type="button" onClick={this.handlerForm}>Next</button>   
                   </div>
                   


                   <div className="package-form input-form">
                        <input name="trackingnumber" type="hidden" className="form-control" id="inputTrackingNumber" value={trackingnumber} /><br/>

                        <label htmlFor="inputDescription">Description</label>
                        <input name="description" type="text" className="form-control" id="inputDescription" placeholder="Enter Description" value={description} onChange={this.changeHandler} onBlur={this.handleBlur}/><br/>
                        <label htmlFor="inputLength">Length</label>
                        <input name="length" type="number" step="any" className="form-control" id="inputLength" placeholder="Enter Length" value={length} onChange={this.changeHandler} onBlur={this.handleBlur}/><br/>
                        <label htmlFor="inputHeight">Height</label>
                        <input name="height" type="number" step="any" className="form-control" id="inputHeight" placeholder="Enter Height" value={height} onChange={this.changeHandler} onBlur={this.handleBlur}/><br/>
                        <label htmlFor="inputWidth">Width</label>
                        <input name="width" type="number" step="any" className="form-control" id="inputWidth" placeholder="Enter Width" value={width} onChange={this.changeHandler} onBlur={this.handleBlur}/><br/>
                        <label htmlFor="inputWeight">Weight</label>
                        <input name="weight" type="number" step="any" className="form-control" id="inputWeight" placeholder="Enter Weight" value={weight} onChange={this.changeHandler} onBlur={this.handleBlur}/><br/>

                        <input name="status" type="hidden" className="form-control" value="Order Receiving"/><br/>

                        <label htmlFor="inputType">Type</label>
                        {isUndefined(this.props.search) ? (<div></div>) : (<div><input name="type" type="text" className="form-control" id="inputType" value={this.props.search.type} readOnly disabled/><br/></div>)}
                        <input type="checkbox" name="myCheck" onClick={this.handleCheck}/><span>By checking this box you confirm that you have read and agree to our terms and conditions</span><br/>
                        <button id="myBtn" type="submit" className="btn btn-primary" >Submit</button><br/>
                        {this.isDisabled() ? (<div class="alert alert-danger" role="alert">
                            <p>One of the fields is incorrect or invalid. <b>Please, follow the instructions in order to continue.</b></p>
                            <ul>
                                 <li>{info}</li>
                            </ul>
                        </div>) : (<div></div>)}
                    </div> 
            </form>
       );
    }
}

export default Form;