import './App.css';
import React, { useState, useEffect } from 'react';
import BookStoreApp from './book-store-app';
import BookOverview from './book-overview/book-overview';
import db from './db';
import {collection, getDocs} from 'firebase/firestore';
import NonFictionApp from './non-fiction/non-fiction-app'
import {
  Routes,
  Route,
  useNavigate,
  Link
} from "react-router-dom";
import ShoppingCart from './shopping-cart/shopping-cart';
import FictionApp from './fiction/fiction-app';


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
                {/* <button>Membership</button>
                <button>Coupons</button>
                <button>Best sellers</button>
                <button>Gift cards</button> */}
                <button><Link to = "/shoppingcart">Go to Cart</Link></button> 
                <span>Hi { entries.name }, welcome back</span>
            </p>
            
        </header>
        <nav className = "app_list">
          <ul>
            <li><Link to = "/">Home</Link></li>
            <li>|</li>
            <li><Link to ="/fiction">Fiction</Link></li>
            <li>|</li>
            <li><Link to ="/non-fiction">Non Fiction</Link></li>
            
          </ul>
        </nav>
      <div>
            <Routes>
                <Route path = "/" element = { <BookStoreApp /> }/>
               <Route path = '/bookoverview/title=:title' element = {<BookOverview />}/>
               <Route path = '/shoppingcart' element = {<ShoppingCart />}/>
               <Route path = '/fiction' element = {<FictionApp />}/>
               <Route path = '/non-fiction' element = {<NonFictionApp />}/>
            </Routes>
        </div> 
    
    </div>
  );
}

export default App;