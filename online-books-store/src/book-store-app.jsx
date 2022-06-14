import React, {useState} from 'react';
import './book-store.css';
import Carousel from './carousel/carousel';
import BookList from './book-list/book-list';

export default function BookStoreApp () {
    const idx = 0;
return (
    <div>
        <div className = "bookStore_ad">
            <h4>Buy one get 50% off our monthly picks and Free shipping on orders of $35 or more!</h4>
        </div>
        <Carousel />
        <div>
            <h3>FIND YOUR PLACE AT B&N'S ONLINE BOOKSTORE</h3>
            <p>Over 5 million books to ship, 3.6 milliion eBooks and 300,000 audiobooks to download right now! Curbside pickup available in most stores!</p>
        </div>
        <h4 className = "bookStore_header">Best Selling books</h4>
        <BookList idx = {idx}/>
        <h4 className = "bookStore_header">List of books</h4>
        <BookList idx = {idx+1}/>
        <h4 className = "bookStore_header">Marvel Comics & Graphic Novels</h4>
        <BookList idx = {idx+7}/>
    </div>
);
}
