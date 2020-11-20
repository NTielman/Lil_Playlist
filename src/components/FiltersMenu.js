import React from 'react';

const tempRatings = [1, 2, 3, 4, 5];
const tempGenres = ['rock', 'jazz', 'pop', 'rnb', 'rap', 'lofi', 'latin', 'soul'];

const FiltersMenu = () => {
    return (
        <ul className="filter-menu">
            {tempRatings.map(index => {
                return (
                    <li key={index}>
                        <label>
                            <i className="fas fa-star"></i>
                            <input
                                className="checkbox"
                                type="checkbox"
                                name="rating"
                                key={index}
                                value={index}></input>
                        </label>
                    </li>);
            })}
            {tempGenres.map(genre => {
                return (
                    <li key={tempGenres.indexOf(genre)}>
                        <label>
                            {genre}
                            <input
                                className="checkbox"
                                type="checkbox"
                                name="genre"
                                key={tempGenres.indexOf(genre)}
                                value={genre}></input>
                        </label>
                    </li>);
            })}
        </ul>);
}

export default FiltersMenu;