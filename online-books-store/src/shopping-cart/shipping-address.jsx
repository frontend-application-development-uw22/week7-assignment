import React, {useState} from 'react';
import { addDoc, collection, getDocs } from '@firebase/firestore';
import db from '../db';
export default function ShippingAddress () {

    const [loading, setLoading] = useState(false);
    const[docId, setDocId] = useState('');

    const[cartLocation, setLocation] = useState('');
    const [cartCountry, setCountry] = useState('');
    const[cartState, setState] = useState('');
    const [cartPincode, setPincode] = useState('');
    const [error, setError] = useState(false);
    const entriesRef = collection(db, 'address');
    const addAddress = () => {
        const location = window.prompt("Please enter your location!");
        const country = window.prompt("country!");
        const state = window.prompt("state!");
        const pincode = window.prompt("pincode!");
        
        
        // setAddress(shippingAdd);
        
        if(location !== '') {
            

            addDoc(entriesRef, {
                country : country,
                location : location,
                pincode : pincode,
                state : state
            }).then(docRef => {
                setDocId(docRef.id)
                getDocs(
                    entriesRef, docRef.id
                ).then(
                    snapshot => {
                    snapshot.docs.forEach((ele) => {
                        console.log(docId, ele.id)
                        if(docId === ele.id) {
                          
                             const doc = ele.data();
                             console.log(doc)
                            setLocation(doc.location)
                            setCountry(doc.country)
                            setState(doc.state);
                            setPincode(doc.pincode)
                            console.log(cartLocation, cartCountry)
                        }
                    })
                    setLoading(false);
                },
                reason => {
                    setError(true);
                    setLoading(false);
            }
        );
            })
        }
    }
    if(loading){
        return <div><h5>loading...</h5></div>
    }
    if(error) {
        return <div><p>Something went wrong, please refresh the page</p></div>
    }

    
    return (<div className = "shippingAddress_container">
        <h5>My shipping address</h5>
        <button onClick = {addAddress}>Add address</button>
        <p>Location: {cartLocation}</p>
        <p>State: {cartState}</p>
        <p>Country: {cartCountry}</p>
        <p>Pincode: {cartPincode}</p>
    </div>)
}