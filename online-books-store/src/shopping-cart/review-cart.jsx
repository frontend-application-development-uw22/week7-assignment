
import React, { useState } from 'react';
import ReviewUi from './review-ui';

export default function ReviewCart ({setData}){
 const [arr, setArr] = useState(setData);

    console.log(arr)
    const deleteItem = (idx) => {
        setArr([...arr.slice(0, idx), ...arr.slice(idx+1, arr.length)]);
        
    }
    const reviewCart = arr.map((ele,idx) => 
      <ReviewUi
        key = {idx}
        url = {ele.url}
        description = {ele.description}
        title = {ele.title}
        price = {ele.price}
        deleteItem = {() => deleteItem (idx)}
      />
    )

    return (<div className = "shippingAddress">
    <h5>Review items</h5>
       {reviewCart} 
</div>)
}