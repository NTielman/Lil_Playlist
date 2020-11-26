import React from 'react';
import FiltersMenu from './FiltersMenu';
import { useDispatch, useSelector } from 'react-redux';
import { sort, toggleFilters } from '../actions';

const SortMenu = () => {
    const dispatch = useDispatch();
    let hideFilters = useSelector(state => state.hideFilters);
    let sortDown = true;

    return (
        <div className="menu-container">
            <table className="menu">
                <tbody>
                    <tr className="sort-menu">
                        <th></th>
                        <th className="menu-title"
                            id="title"
                            onClick={(event) => {
                                const sortCriteria = {
                                    sortBy: event.target.id, //sort by title
                                    sortDirection: sortDown
                                };
                                dispatch(sort(sortCriteria))
                                sortDown = !sortDown;
                            }}
                        >Title <i className="fas fa-sort"></i></th>
                        <th className="menu-title"
                            id="artist"
                            onClick={(event) => {
                                const sortCriteria = {
                                    sortBy: event.target.id, //sort by artist
                                    sortDirection: sortDown
                                };
                                dispatch(sort(sortCriteria))
                                sortDown = !sortDown;
                            }}
                        >Artist <i className="fas fa-sort"></i></th>
                        <th className="menu-title"
                            onClick={() => dispatch(toggleFilters())}>Genre</th>
                        <th className="menu-title"
                            id="rating"
                            onClick={(event) => {
                                const sortCriteria = {
                                    sortBy: event.target.id, //sort by rating
                                    sortDirection: sortDown
                                };
                                dispatch(sort(sortCriteria))
                                sortDown = !sortDown;
                            }}
                        >Rating <i className="fas fa-sort"></i></th>
                    </tr>
                </tbody>
            </table>
            <div className="menu">
                {hideFilters ? null : <FiltersMenu />}
            </div>

        </div>);
}

export default SortMenu;