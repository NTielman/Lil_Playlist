import React from 'react';

//generates a number of star icons based on ratingNumber
const starRating = (ratingNumber) => {
    let iconArray = [];

    for (let num = 0; num < ratingNumber; num++) {
        iconArray = [...iconArray, <i key={num} className="fas fa-star"></i>];
    }

    return iconArray;

}

export default starRating;