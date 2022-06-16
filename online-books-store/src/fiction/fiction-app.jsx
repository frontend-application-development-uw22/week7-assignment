import React, {useEffect, useState} from 'react';
import BookUi from '../book-list/book-ui';
import '../non-fiction/non-fiction.css'
export default function FictionApp () {
    const [fictionBook, setFictionBooks] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const API_KEY = 'pVOgAehZw0GFSu8TPgZcXJYU6GGoxA0q';
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;

    useEffect(()=> {
        fetch(url)
        .then((response)=> response.json())
        .then((data) => { 
            setFictionBooks(data.results.books)
           
            setLoading(false);
           
        })
        .catch((error) => {
            alert("No data found");
        })
    },[url])
 
    if(loading) {
        return <h5>Loading...</h5>;
    }

    const  listOfBooks = fictionBook.map((ele, idx) => 
        <BookUi 
        key = { idx }
        item = { ele }
    />  
    );
    return ( 
        <div className = "nonFiction_container">
    <div className ="bookList_main">
    <div className = "bookList_container " >
        {listOfBooks}
    </div>
    </div>
 
</div>)
}