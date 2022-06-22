import React, {useState, useEffect} from 'react';
import CarouselUi from './carousel-ui';

export default function Carousel () {
    const [feed, setFeed] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [idx, setIdx] = useState(0);

    const leftArrow = () => {
        setIdx(oldIdx => oldIdx+1); 
    } 

    const API_KEY = 'pVOgAehZw0GFSu8TPgZcXJYU6GGoxA0q';
    const url = `https://api.nytimes.com/svc/topstories/v2/books.json?api-key=${API_KEY}`;

    useEffect (() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setFeed(data.results[idx]);
            setLoading(false)
        })
    },[idx, url]);

    if(loading) {
        return <div><h4>Loading...</h4></div>;
    }

    return (
        <div>
            <CarouselUi 
            carouselImage = {feed.multimedia[0].url}
            imgDescription = {feed.title}
             leftArrow = { leftArrow }
            />
        </div>
    );
}