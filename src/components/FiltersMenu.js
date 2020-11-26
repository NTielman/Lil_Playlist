import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilters } from '../actions';

const genres = ['rock', 'jazz', 'pop', 'rnb', 'rap', 'lofi', 'latin', 'soul'];

const FiltersMenu = () => {
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.activeFilters);

    return (
        <ul className="filter-menu">
            {genres.map(genre => {
                return (
                    <li key={genres.indexOf(genre)}>
                        <input
                            className="checkbox"
                            type="checkbox"
                            name="genre"
                            checked={activeFilters[genre]}
                            onChange={(event) => dispatch(getFilters(event.target))}
                            id={genre}
                            value={genre}></input>
                        <label htmlFor={genre}>{genre}</label>
                    </li>);
            })}
        </ul>);
}

export default FiltersMenu;