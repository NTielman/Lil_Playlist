/* -------------- Renders a list of songs (playlist) to DOM -------------- */
import React from 'react';
import ListItem from './ListItem';
import filterList from '../functions/filterList';
import sortList from '../functions/sortList';
import { useSelector } from 'react-redux';

const List = () => {

    //modifies playlist whenever song is added or removed from library
    const musicLibrary = useSelector(state => state.updateLibrary);
    //modifies playlist when 1 or more filters is selected or deselected
    const activeFilters = useSelector(state => state.activeFilters);
    const applyFilters = Object.values(activeFilters).filter(value => value === true);
    //modifies playlist when user selects a sortingCriteria (rating, title etc.)
    const activeSort = useSelector(state => state.activeSort);

    //returns list to be rendered to DOM based on active filters and sortCriteria
    const playlist = () => {
        let list = musicLibrary.map(song => song);

        //if there are active filters filter list 
        if (applyFilters.length > 0) {
            list = filterList(list, activeFilters);
        }

        //if sortCriteria is active sort list
        if (activeSort.active) {
            list = sortList(list, activeSort);
        }

        return list;
    };


    return (
        <div className="playlist-container">
            <table className="playlist">
                <tbody>
                    {playlist().map(song => {
                        return (
                            <ListItem
                                song={song}
                                key={song.id} />)
                    })}
                </tbody>
            </table>
        </div>
    );

}

export default List;