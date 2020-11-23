import React from 'react';
import FiltersMenu from './FiltersMenu';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { sort, duplicate, toggleFilters } from '../actions';

const SortMenu = () => {
    const dispatch = useDispatch();
    const musicLibrary = useSelector(state => state.musicLibrary);
    const hideFilters = useSelector(state => state.filterSongs);

    //makes initial copy of musiclibrary to display
    dispatch(duplicate(musicLibrary));
    let sortDown = true;

    return (
        <div>
            <ul className="sort-menu">
                <li id="title"
                    onClick={(event) => {
                        const sortCriteria = {
                            sortBy: event.target.id, //sort by title
                            sortDirection: sortDown
                        };
                        dispatch(sort(sortCriteria))
                        sortDown = !sortDown;
                    }}
                >Title <i className="fas fa-sort"></i></li>
                <li id="artist"
                    onClick={(event) => {
                        const sortCriteria = {
                            sortBy: event.target.id, //sort by artist
                            sortDirection: sortDown
                        };
                        dispatch(sort(sortCriteria))
                        sortDown = !sortDown;
                    }}
                >Artist <i className="fas fa-sort"></i></li>
                <li
                    onClick={() => dispatch(toggleFilters())}>Genre</li>
                <li id="rating"
                    onClick={(event) => {
                        const sortCriteria = {
                            sortBy: event.target.id, //sort by rating
                            sortDirection: sortDown
                        };
                        dispatch(sort(sortCriteria))
                        sortDown = !sortDown;
                    }}
                >Rating <i className="fas fa-sort"></i></li>
            </ul>
            {hideFilters ? null : <FiltersMenu />}
        </div>);
}

export default SortMenu;