import React, { useEffect, useState } from 'react';

import BookUi from './book-ui';
import '../book-list/book-list.css'

export default function BookList ({idx}) {
   
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
 
    const API_KEY = 'pVOgAehZw0GFSu8TPgZcXJYU6GGoxA0q';
    const url = `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${API_KEY}`;

    useEffect(()=> {
        fetch(url)
        .then((response)=> response.json())
        .then((data) => { 
            setBooks(data.results.lists[idx].books)
            setLoading(false);
        })
        .catch((error) => {
            alert("No data found");
        })
    },[idx, url])
 
    if(loading) {
        return <h5>Loading...</h5>;
    }
   
    const  listOfBooks = books.map((ele, idx) => 
        <BookUi 
        key = { idx }
        item = { ele }
    />  
    );

    return (
        <div className ="bookList_main">
            <div className = "bookList_container " >
                {listOfBooks}
            </div>
         
        </div>
    );
}