import React from 'react';
import FiltersMenu from './FiltersMenu';

const SortMenu = () => {
    const tempBool = true;
    //onclik di genre !tempbool

    return (
        <div>
            <ul className="sort-menu">
                <li>Title <i className="fas fa-sort"></i></li>
                <li>Artist <i className="fas fa-sort"></i></li>
                <li>Genre</li>
                <li>Rating <i className="fas fa-sort"></i></li>
            </ul>
            {tempBool ? <FiltersMenu /> : null}
        </div>);
}

export default SortMenu;