import React, {useState, useEffect} from 'react';
import ShippingAddress from './shipping-address';
import PaymentMethod from './payment-method';
import './shopping-cart.css';
import ReviewCart from './review-cart';
import OrderSummary from './order-summary'
import {  getDocs, collection, addDoc } from 'firebase/firestore';
import db from '../db';
import { useNavigate } from 'react-router-dom';
export default function  ShoppingCartApp () {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [idRef, setIdRef] = useState([]);
  
    const navigate = useNavigate();
    const getEntries = collection(db, 'cartEntries')
    useEffect (() => {
        let arr = [];
        getDocs(getEntries)
        .then(snapshot => {
            // setSnapshot(snapshot.docs);
            snapshot.docs.forEach(doc => { 
                if(doc.data())
                arr.push(doc.data())
                //console.log(arr) 
                setData(arr);
                
                });
                setLoading(false);
                },
                reason => {
                    setError(true);
                    setLoading(false)
                })
    },[])
    if(loading){
        return <div><h5>loading...</h5></div>
    }
    if(error) {
        return <div><p>Something went wrong, please refresh the page</p></div>
    }

    // const total  = () => {
    //     let sum = 0;
    //     let tax = 3;
    //     data.forEach(ele => {
    //         sum += parseInt(ele.price)+tax;
    //     })
    //     return sum;
    // }

    const placeOrder = () => {
        const orderEntries = collection(db, 'orders');
            addDoc(orderEntries, {
                orderId : "",
                orderTotal : "",
            }).then(docRef => {
                setIdRef([...idRef, docRef.id])
                alert(`order has been placed successfully, your orderId is ${docRef.id}`)
            }) 
            navigate('/')
           return;
        }


return (<div>
     <h4 className = "bookStore_header">My shopping cart</h4>
    <div className = "shoppingcart_container">
    <div className = "shoppingCart">
        <section className = "shoppingcart_shippingAddress">
            <ShippingAddress />
        </section>
        <section className = "shoppingcart_shippingAddress">
        <PaymentMethod />
        </section>
        <section className = "shoppingcart_reviewItems">
            <ReviewCart setData = {data}/>
        </section>
    </div>
    <div className = "shoppingCart_orderconatiner">
    <section className = "shoppingCart_order">
            <OrderSummary items = {data.length} 
            placeOrder = {placeOrder}
            shipping = "2"
            totalBeforeTax = "0.00"
            tax = "3.00"
            orderTotal = "3.00"/>
        </section>
        <p>Thank you for choosing us!</p>
    </div>
    </div>
</div>);
}