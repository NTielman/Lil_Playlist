import React from 'react';

const tempGenres = ['rock', 'jazz', 'pop', 'rnb', 'rap', 'lofi', 'latin', 'soul'];

const FiltersMenu = () => {
    return (
        <ul className="filter-menu">
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