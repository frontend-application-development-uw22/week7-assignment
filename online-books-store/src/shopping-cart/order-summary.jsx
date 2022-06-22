import React from 'react';

export default function OrderSummary ({items, placeOrder, shipping, totalBeforeTax, tax, orderTotal}) {
    return (<div className = "shippingAddress">
    
    <button onClick = {placeOrder}>Place your order</button>
    <hr></hr>
    <h4>Order Summary</h4>
    <p>Items: <span>{items}</span></p>
    <p>Shipping & handling: <span>${shipping}</span></p>
    <p>Total before tax: <span>${totalBeforeTax}</span></p>
    <p>Estimated tax to be collected: <span>${tax}</span></p>
   <hr></hr>
   <p><h3>Order total: <span>${orderTotal}</span></h3></p>
</div>)
}