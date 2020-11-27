/* -------------- Renders a menu of genres to filter the playlist by -------------- */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilters } from '../actions';

const FiltersMenu = () => {

    const genres = ['rock', 'jazz', 'pop', 'rnb', 'rap', 'lofi', 'latin', 'soul'];
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.activeFilters);

    return (
        <ul className="filter-menu">
            {genres.map(genre => {
                return (
                    <li key={genres.indexOf(genre)}>
                        <input
                            type="checkbox"
                            name="genre"
                            className="checkbox"
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