import React, {useState} from 'react';


export default function PaymentForm ({ closeModal, addDetails}) {
    const [cardNumber, setCardNumber] = useState('')
    const [nameOnCard, setNameOnCard] = useState('')
    const [date, setDate] = useState('')
    const [check, setCheck] = useState(false);
    return (
        <div className="bg" >
            <div className="modal">
                <h5>Add debit or credit card details</h5>
                <form onSubmit = {addDetails}>
                    <div className = "form_div">
                        <label>Card number</label>
                        <input type="number" 
                            value = {cardNumber}  
                            onChange = {event => setCardNumber(event.target.value)}
                           
                            ></input>
                    </div>
                    <div className = "form_div">
                        <label>Name on card</label>
                        <input type="text" 
                            value = {nameOnCard}  
                            onChange = {event => setNameOnCard(event.target.value)}
                            
                            ></input>
                            
                        </div>
                    <div className = "form_div">
                        <label>Expiration date</label>
                        <input type="date" 
                            value = {date}  
                            onChange = {event => setDate(event.target.value)}
                     
                            ></input>
                    </div>
                    <div className = "form_div">
                        <label>set as default payment method</label>
                        <input type="checkbox" 
                            value = {check}  
                            onClick = {() => setCheck(true)}></input>
                    </div>
                    <div className = "form_div">
                        <button type = "submit">Add you card</button>
                        <button onClick ={closeModal}>Cancel</button>
                    </div>
                </form>
            </div>
            </div>
    )
}