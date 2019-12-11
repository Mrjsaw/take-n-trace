import React, { Component, useState, useRef, useEffect } from 'react';


function Product({ product }) {
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
          <h1>Congrats, you just bought {product.name}!</h1>
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

  const product = {
    price: 1,
    name: 'een package',
    description: 'dit is een heel mooie postpacket'
  };
  

class Payment extends Component {

    

  render() {
    return (
      <div className="Payment">
        <h1>Here comes the page to pay with Paypall</h1>
        <Product product={product} />
        

      </div>
    );
  }
}

export default Payment;