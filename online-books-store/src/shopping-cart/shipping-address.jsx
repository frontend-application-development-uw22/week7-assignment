import { addDoc, collection } from '@firebase/firestore';
import React, {useState} from 'react';

import db from '../db'
export default function ShippingAddress () {
    const[address, setAddress] = useState('');
    const addAddress = () => {
        const shippingAdd = window.prompt("Please enter your shipping address!");
        setAddress(shippingAdd);
        
        if(address !== '') {
            const entriesRef = collection(db, 'userEntry');
            addDoc(entriesRef, {
                address : address
            })
        }

    }

    
    return (<div className = "shippingAddress">
        <h5>My shipping address</h5>
        <button onClick = {addAddress}>Add address</button>
        <p>{address}</p>
    </div>)
}