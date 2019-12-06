import React, {Component} from 'react';

const PersonalInfo = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Go to package info");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Personal Information</h1>
            <div class="col-xs-2">
                <label for="inputName">Name</label>
                <input type="text" class="form-control input-sm" id="inputName" placeholder="Enter name"/><br/>
            </div>
            <label for="input">Email address</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Enter email"/><br/>
            <label for="inputCountry">Origin Country</label>
            <select class="form-control" id="inputCountry">
                <option>Belgium</option>
            </select>
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
        <form onSubmit={handleSubmit}>
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