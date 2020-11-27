/* -------------- Renders a menu of categories to sort the playlist by -------------- */
import React from 'react';
import { useDispatch } from 'react-redux';
import { sort, toggleFilters } from '../actions';

const SortMenu = () => {

    const categories = ['title', 'artist', 'rating'];
    const dispatch = useDispatch();
    let sortDown = true;

    return (
        <tbody>
            <tr className="sort-menu">
                <th></th>
                {categories.map(category => {
                    return (
                        <th id={category}
                            key={categories.indexOf(category)}
                            onClick={(event) => {
                                const sortCriteria = {
                                    sortBy: event.target.id,
                                    sortDirection: sortDown
                                }

                                dispatch(sort(sortCriteria))
                                sortDown = !sortDown;
                            }}
                            className="menu-title">
                            {category[0].toUpperCase() + category.slice(1)}
                            <i className="fas fa-sort"></i>
                        </th>);
                })}
                <th className="menu-title"
                    onClick={() => dispatch(toggleFilters())}>Genre
                </th>
            </tr>
        </tbody>);

}

export default SortMenu;