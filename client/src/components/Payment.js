import React, { Component, useState, useRef, useEffect } from 'react';
import OrderComponent from './OrderComponent.js';
import  { Redirect } from 'react-router-dom';
import Order from '../pages/Order.js';

function Product({ product }, {trackingnumber}) {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const paypalRef = useRef();
  
    useEffect(() => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: {
                    currency_code: 'USD',
                    value: product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            setPaidFor(true);
            console.log(order);
          },
          onError: err => {
            setError(err);
            console.error(err);
          },
        })
        .render(paypalRef.current);
    }, [product.description, product.price]);
  
    if (paidFor) {
      return (
        <div>
          <h1>Thank you for your purchase!</h1>
          <OrderComponent data={product.trackingnumber}/>
        </div>
      );
    }
  
    return (
      <div>
        {error && <div>Uh oh, an error occurred! {error.message}</div>}
        <h1>
          {product.description} for ${product.price}
        </h1>
        <div ref={paypalRef} />
      </div>
    );
  }
  // here comes the basic information about the package
  // like the price, name, and description
  // for the price we will use the price
  // for the name we will use the package type
  // for the description we will use the description
  // we get this information from either the props or state
  const product = {
    price: 1,
    name: 'een package',
    description: 'dit is een heel mooie postpacket',
    trackingnumber: false
  };


class Payment extends Component {
  constructor(props){
    super(props);
}

  render() {
    product.trackingnumber = this.props.location.state;
    console.log(product);
    return (
      <div className="Payment">
        <Product product={product} />
      </div>
    );
  }
}

export default Payment;