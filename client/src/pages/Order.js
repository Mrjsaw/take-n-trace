import React, { Component } from 'react';
import { isUndefined } from 'util';
import  { Redirect } from 'react-router-dom';
// tO DO: import '../order.css';
import OrderComponent from '../components/OrderComponent';
const jsPDF = require('jspdf');

class Order extends Component {

  // componentDidMount(){
  //   var doc = new jsPDF();
  //   var elementHandler = {
  //     '#editor': function (element, renderer) {
  //       return true;
  //     }
  //   };
  //   var source = window.document.getElementsByTagName("body")[0].innerHTML;
  //   doc.fromHTML(
  //       source,
  //       15,
  //       15,
  //       {
  //         'width': 180,'elementHandlers': elementHandler
  //       });
    
  //   doc.output("dataurlnewwindow");
  // }

  render() {
    if(isUndefined(this.props.location.state)){
        return <Redirect to="/" />;
    }
    let trackingnumber = Object.values(this.props.location.state)[0];
    const src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${trackingnumber}`
    return (
      <div>
        <div className="container" id="printToPdf">
            <OrderComponent trackingnumber={trackingnumber}/>
      </div>
      </div>
    );
  }
}

export default Order;
