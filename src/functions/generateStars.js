/* -------- generates a number of star icons based on ratingNumber -------- */
import React from 'react';

const starRating = (ratingNumber) => {

    //create empty list (container) to hold all icons 
    let iconArray = [];

    for (let num = 0; num < ratingNumber; num++) {
        iconArray = [...iconArray, <i key={num} className="fas fa-star"></i>];
    }

    return iconArray;

}

export default starRating;