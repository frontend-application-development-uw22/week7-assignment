import React from "react";

export default function ReviewUi({url, description, title, price, deleteItem }) {
    return (<div className ="review_container">
    <section className = "review_imgSection">   
        <img src = {url} alt = {description}></img>
    </section>
    <section className ="review_description"> 
    <p>Title: {title}</p>  
       <p>Price ${price} <span> <button className="deleteBtn" onClick = {deleteItem}>Delete</button></span></p>
      
    </section>
</div>)
}