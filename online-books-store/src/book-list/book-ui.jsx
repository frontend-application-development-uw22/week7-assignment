import React from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from '@firebase/firestore';
import db from '../db';

export default function BookUi({ item }) {
    const navigate = useNavigate();

    const bookOverview = (e) => {
        if(e.target.alt !== null) {
            const entriesRef = collection(db, 'selectedBook');
           
            addDoc(entriesRef, {
                author : item.author,
                description: item.description,
                price : item.price,
                publisher : item.publisher,
                rank: item.rank,
                title: item.title,
                url : item.book_image,
            })
        
        }
        navigate(`/bookoverview/title=${e.target.alt}`);
    }
   
    return (
        <div className = "bookui_container" onClick = { bookOverview }>
        <img className = "bookui_img" src = {item.book_image} alt = {item.title} ></img>
        <div>
            <h6>{item.author}</h6>
            <h5>${item.price}</h5>
        </div>
    </div>
    );
    
}
