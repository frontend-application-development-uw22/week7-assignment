import React, {useState} from 'react';
import PaymentForm from './payment-form';
export default function PaymentMethod () {
    const [modal, setModal] = useState(false);
    const [cardNum, setCardNum] = useState(undefined);
    const [cardName, setName] = useState('');
    const [expDate, setDate] = useState('');

    const openModal = () => {
        setModal(true);
    }
    const closeModal = (e) => {
        e.preventDefault()
        setModal(false)
        console.log("clicked")
        console.log(modal)
    }

    const addDetails = (e) => {
        e.preventDefault()
        console.log(e)
        setCardNum(e.target[0].value)
        setName(e.target[1].value)
        setDate(e.target[2].value)
        setModal(false)
    }
    return (<div className = "shippingAddress">
    <h5>Payment method</h5>
    <button onClick = {openModal}>Add card or debit</button>
    <div className ={modal ? "show" : "hide"}>
        <PaymentForm 
            closeModal = {closeModal}
            addDetails = {addDetails}
            />
        </div>
        <div>
            <p>card Number : {cardNum}</p>
            <p>card Name : {cardName}</p>
            <p>Expiry Date : {expDate}</p>
          
        </div>
    </div>)
};