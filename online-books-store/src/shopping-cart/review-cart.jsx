
import React, { useEffect, useState } from 'react';
import {  getDocs, collection, deleteDoc } from 'firebase/firestore';
import db from '../db';
import ReviewUi from './review-ui';

export default function ReviewCart (){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [snap, setSnapshot] = useState([]);
    const getEntries = collection(db, 'cartEntries')
    useEffect (() => {
        let arr = [];
       
        getDocs(getEntries)
        .then(snapshot => {
            setSnapshot(snapshot.docs);
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
    const deleteItem = (idx) => {
        setData([...data.slice(0, idx), ...data.slice(idx+1, data.length)]);
        const item = data[idx];
        // deleteDoc(getEntries, snap[idx].id)
        // .then(snapshot => {
        //    console.log("deleted")
        //         },
        //         reason => {
        //             setError(true);
        //             setLoading(false)
        //         })
        console.log(snap[idx].id)
       
       
       
    }
    const reviewCart = data.map((ele,idx) => 
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