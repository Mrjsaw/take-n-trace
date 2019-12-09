import React, {Component} from 'react';

const PersonalInfo = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Go to package info");
    }

    return (
        <form class="personal-form" onSubmit={handleSubmit}>
            <h1>Personal Information</h1>
            <hr/>
            <div class="row">
                <div>
                    <label for="input">Email address</label><br/>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email"/>
                </div>
            </div>
            <div class="row">
                <div>
                    <label for="inputFirstName" class="col-xs-6">First name</label>
                    <input type="text" class="form-control input-sm" id="inputFirstName" placeholder="Enter your first name"/><br/>
                </div>
                <div>
                    <label for="inputLastName" class="col-xs-6">Last name</label>
                    <input type="text" class="form-control input-sm" id="inputLastName" placeholder="Enter your last name"/><br/>
                </div>
            </div>
            <div>

            </div>
            <div class="row">
                <div>
                <label for="inputCountry">Origin Country</label>
                <select class="form-control" id="inputCountry">
                    <option>Belgium</option>
                </select>
                </div>
            </div>
      
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Enter address"/><br/>
            <label for="inputPostocde">Postcode</label>
            <input type="text" class="form-control" id="inputPostcode" placeholder="Enter postcode"/><br/>
            <button type="submit" class="btn btn-primary">Next</button>
        </form>
    );
}

const PackageInfo = () => {
    // TO BE CHANGED
    const handleSubmit = (event) => alert("Submit parcel shipping");
    return (
        <form class="package-form" onSubmit={handleSubmit}>
            <h1>Package Information</h1>
            <label for="inputDescription">Description</label>
            <input type="text" class="form-control" id="inputDescription" placeholder="Enter Description"/><br/>
            <label for="inputLength">Length</label>
            <input type="text" class="form-control" id="inputLength" placeholder="Enter Length"/><br/>
            <label for="inputWeight">Weight</label>
            <input type="text" class="form-control" id="inputWeight" placeholder="Enter name"/><br/>
            <label for="inputWeight">Height</label>
            <input type="text" class="form-control" id="inputHeight" placeholder="Enter name"/><br/>
            <label for="inputWeight">Destination</label>
            <input type="text" class="form-control" id="inputHeight" placeholder="Enter name"/><br/>
            <label for="inputWeight">Name recipient</label>
            <input type="text" class="form-control" id="inputHeight" placeholder="Enter name"/><br/>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {data: ''};
    }

    handleSubmit = (event) => {
        this.setState({});
        alert("Hello world");
    }

    render(){
       return(
           <div>
                <div>
                    <PersonalInfo /><br/>
                </div>
            <div>
                    <PackageInfo/>
                </div>
           </div>  
       );
    }
}

export default Form;