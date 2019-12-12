import React, { Component } from 'react';
import { isUndefined } from 'util';
import  { Redirect } from 'react-router-dom';
const axios = require('axios');

class Order extends Component {
    constructor(props) 
    { 
        super(props); 
        this.state = { status : true }; 
    } 
  render() {
    if(isUndefined(this.props.location.state)){
        return <Redirect to="/" />;
    }
    const trackingnumber = Object.values(this.props.location.state)[0];
    const src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${trackingnumber}`
    return (

      <div>
        <div className="container">
            <h1>{trackingnumber}</h1>
            <img id="image" src={src} />
      </div>
      </div>
    );
  }
}

export default Order;
