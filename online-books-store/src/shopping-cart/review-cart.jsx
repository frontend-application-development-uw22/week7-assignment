
import { deleteDoc, doc, collection, getDocs } from 'firebase/firestore';
import React, { useState,useEffect } from 'react';
import ReviewUi from './review-ui';
import db from '../db';
export default function ReviewCart ({setData}){
 const [arr, setArr] = useState(setData);
const [id, setId] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(false);
    // console.log(setData)
    // console.log(arr)
    const deleteItem = (idx) => {
        setArr([...arr.slice(0, idx), ...arr.slice(idx+1, arr.length)]);
        deleteCartItems (id[idx])
    }

    const getEntries = collection(db, 'cartEntries')
    useEffect (() => {
        let array = [];
        let idArr = [];
        getDocs(getEntries)
        .then(snapshot => {
            // setSnapshot(snapshot.docs);
            snapshot.docs.forEach(doc => {
                console.log(doc.id) 
                if(doc.id){
                    idArr.push(doc.id)
                    array.push(doc.data());
                    setId(idArr);
                    setArr(array);
                    }
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
console.log(arr)
    async function deleteCartItems (id) {
        alert("Are you sure, you want to delete this item from the cart?");
        const itemRef = doc(db, 'cartEntries', id);
        await deleteDoc(itemRef);
        
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