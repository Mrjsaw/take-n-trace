import React, { Component } from 'react';
import { isUndefined } from 'util';
import  { Redirect } from 'react-router-dom';

// tO DO: import '../order.css';
import OrderComponent from '../components/OrderComponent';
const jsPDF = require('jspdf');


class Order extends Component {

  componentDidMount(){
    var doc = new jsPDF();
    var elementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

    var source = document.getElementById("root");
    console.log(source);
    doc.fromHTML(
        source,
        10,
        10,
        {
            'width': 100,'elementHandlers': elementHandlers
        });

    doc.output("newWindow");
  }

  render() {
    if(isUndefined(this.props.location.state)){
        return <Redirect to="/" />;
    }
    let trackingnumber = Object.values(this.props.location.state)[0];
    const src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${trackingnumber}`
    return (
      <div>
        <p id="editor"></p>
        <div className="container" id="printToPdf">
            <OrderComponent trackingnumber={trackingnumber}/>
      </div>
      </div>
    );
  }
}

export default Order;
