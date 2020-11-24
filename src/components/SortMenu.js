import React from 'react';
import FiltersMenu from './FiltersMenu';
import { useDispatch, useSelector } from 'react-redux';
import { sort, toggleFilters } from '../actions';

const SortMenu = () => {
    const dispatch = useDispatch();

    let hideFilters = useSelector(state => state.hideFilters);

    let sortDown = true;

    return (
        <div className="menu">
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