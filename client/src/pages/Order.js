import React, { Component } from 'react';
import { isUndefined } from 'util';
import  { Redirect } from 'react-router-dom';

// tO DO: import '../order.css';
import OrderComponent from '../components/OrderComponent';
class Order extends Component {

  render() {
    if(isUndefined(this.props.location.state)){
        return <Redirect to="/" />;
    }
    let trackingnumber = Object.values(this.props.location.state)[0];
    const src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${trackingnumber}`
    return (
      <div>
        <div className="container">
            <OrderComponent trackingnumber={trackingnumber}/>
      </div>
      </div>
    );
  }
}

export default Order;
