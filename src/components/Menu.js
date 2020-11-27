/* -------------- Renders sorting menu and filtersmenu to DOM -------------- */
import React from 'react';
import FiltersMenu from './FiltersMenu';
import SortingMenu from './SortingMenu';
import { useSelector } from 'react-redux';

const Menu = () => {

    let hideFilters = useSelector(state => state.hideFilters);

    return (
        <div className="menu-container">
            <table className="menu">
                <SortingMenu />
            </table>

            <div className="menu">
                {hideFilters ? null : <FiltersMenu />}
            </div>
        </div>);

}

export default Menu;