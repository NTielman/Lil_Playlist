/* -------------- Renders a menu of categories to sort the playlist by -------------- */
import React from 'react';
import { useDispatch } from 'react-redux';
import { sort, toggleFilters } from '../actions';

const SortMenu = () => {

    const categories = ['title', 'artist', 'rating'];
    const dispatch = useDispatch();

    return (
        <tbody>
            <tr className="sort-menu">
                <th></th>
                {categories.map(category => {
                    return (
                        <th id={category}
                            key={categories.indexOf(category)}
                            onClick={(event) => dispatch(sort(event.target.id))}
                            className="menu-title">
                            {category[0].toUpperCase() + category.slice(1) + ' '}
                            <i id={category} className="fas fa-sort"></i>
                        </th>);
                })}
                <th className="menu-title"
                    onClick={() => dispatch(toggleFilters())}>Genre
                </th>
            </tr>
        </tbody>);

}

export default SortMenu;