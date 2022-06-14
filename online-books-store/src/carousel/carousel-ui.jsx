import React from 'react';

export default function CarouselUi ({carouselImage, imgDescription, leftArrow }) {
    return (
        <div className = "carouselUi_slideshow">
            
            <div>
            <button className = "slideshow_button" onClick = {leftArrow} >&#x3c;</button>
                <img src = {carouselImage} alt = {imgDescription}></img>
                <button className = "slideshow_button" onClick = {leftArrow} >&#x3e;</button>
            </div>
            
        </div>
    );
}