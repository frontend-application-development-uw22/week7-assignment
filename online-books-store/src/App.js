import './App.css';
import React, { useState, useEffect } from 'react';
import BookStoreApp from './book-store-app';
import BookOverview from './book-overview/book-overview';
import db from './db';
import {collection, getDocs} from 'firebase/firestore';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import ShoppingCart from './shopping-cart/shopping-cart';


function App() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getDocs(
        collection(db, 'userEntry')
    ).then(
        snapshot => {
          console.log(snapshot)
            snapshot.forEach(doc => {
              setEntries(doc.data());
                console.log(doc.id, doc.data())
            });
           
            setLoading(false);
        },
        reason => {
            setError(true);
            setLoading(false);
        }
    );
}, []);


if (error) {
  return <p>no username</p>
}

if (loading) {
  return <p>Loading...</p>
}

const home = () => {
  navigate('/')
}
  return (
    <div className="App">
          <header className= "header">
        <h1 onClick = {home}>Barnes & Noble</h1>
            <p className = "bookStoreApp_headerSpan">
                <button>Membership</button>
                <button>Coupons</button>
                <button>Best sellers</button>
                <button>Gift cards</button>
                <span>Hi { entries.name }, welcome back</span>
            </p>
            
        </header>
        <nav className = "app_list">
          <ul>
            <li>Books</li>
            <li>|</li>
            <li>Fiction</li>
            <li>|</li>
            <li>Non fiction</li>
            <li>|</li>
            <li>E-Books</li>
            <li>|</li>
            <li>Audio Books</li>
          </ul>
        </nav>
      <div>
            <Routes>
                <Route path = "/" element = { <BookStoreApp /> }/>
               <Route path = '/bookoverview/title=:title' element = {<BookOverview />}/>
               <Route path = '/shoppingcart' element = {<ShoppingCart />}/>
            </Routes>
        </div> 
    
    </div>
  );
}

export default App;