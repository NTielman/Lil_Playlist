import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../actions';

const genres = ['rock', 'jazz', 'pop', 'rnb', 'rap', 'lofi', 'latin', 'soul'];

const FiltersMenu = () => {
    const dispatch = useDispatch();

    return (
        <ul className="filter-menu">
            {genres.map(genre => {
                return (
                    <li key={genres.indexOf(genre)}>
                        <label>
                            {genre}
                            <input
                                className="checkbox"
                                type="checkbox"
                                name="genre"
                                onChange={(event) => dispatch(filter(event.target))}
                                key={genres.indexOf(genre)}
                                value={genre}></input>
                        </label>
                    </li>);
            })}
        </ul>);
}

export default FiltersMenu;