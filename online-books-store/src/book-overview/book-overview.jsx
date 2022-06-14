import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { getDocs, collection, addDoc } from 'firebase/firestore';
import db from '../db';

export default function BookOverview () {
    const [loading, setLoading] = useState(true);
    const [entry, setEntry] = useState({});
  
    const [error, setError] = useState(false);
    const { title } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let arr = [];
        getDocs(
            collection(db, 'selectedBook')
        ).then(
            snapshot => {
                snapshot.forEach(doc => {
                    arr.push(doc.data())
                    // console.log(arr)
                    if(doc.data().title === title) {
                        setEntry(doc.data());
                    }
                   
                    
                });
                setLoading(false);
            },
            reason => {
                setError(true);
                setLoading(false);
            }
        );

    }, [title]);

    if(loading){
        return <div><h5>loading...</h5></div>
    }
    if(error) {
        return <div><p>Something went wrong, please refresh the page</p></div>
    }

    const goToCart = () => {
        navigate('/shoppingcart')
    }

    const addToCart = () => {
        const entriesRef = collection(db, 'cartEntries');
        addDoc(entriesRef, {
            author : entry.author,
            description: entry.description,
            price : entry.price,
            publisher : entry.publisher,
            rank: entry.rank,
            title: entry.title,
            url : entry.url,
        })
        alert("Book has been successfully added to the cart!")
    }

    return (
        <div className = "bookoverview_container">
            <section className ="bookoverview_imgSection">
                <img src ={entry.url} alt = {entry.description}></img>
                
            </section>
            <section className ="bookoverview_description">
                <h3>Title: {title} <span>by {entry.author}</span></h3>
                <p>Description: {entry.description}</p>
                <p>Rank: {entry.rank}</p>
                <p>publisher: {entry.publisher}</p>
                <hr></hr>
                <h2>Price ${entry.price}</h2>
                <button onClick = {addToCart}>Add to cart</button>
                <button onClick = {goToCart}>Go to cart</button>
            </section>
        </div>
    );
}