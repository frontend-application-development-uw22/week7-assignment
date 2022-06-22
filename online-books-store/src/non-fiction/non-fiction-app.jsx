import React from 'react';
import BookList from '../book-list/book-list';
import './non-fiction.css'
export default function NonFictionApp () {
    const idx = 4;
    return (<div className = "nonFiction_container">
        <BookList idx = {idx+1}/>
    </div>)
}