import React from 'react';
import ShippingAddress from './shipping-address';
import PaymentMethod from './payment-method';
import './shopping-cart.css';
import ReviewCart from './review-cart';
export default function  ShoppingCartApp () {
return (<div>
     <h4 className = "bookStore_header">My shopping cart</h4>
    <div className = "shoppingCart">
        <section className = "shoppingcart_shippingAddress">
            <ShippingAddress />
        </section>
        <section className = "shoppingcart_shippingAddress">
        <PaymentMethod />
        </section>
        <section className = "shoppingcart_reviewItems">
            <ReviewCart/>
        </section>
    </div>
</div>);
}