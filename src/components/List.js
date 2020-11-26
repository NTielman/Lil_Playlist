import React, { useEffect } from 'react';
import ListItem from './ListItem';
import FilteredList from './FilteredList';
import { useSelector, useDispatch } from 'react-redux';
import { duplicate } from '../actions';

const List = () => {
    const dispatch = useDispatch();
    const musicLibrary = useSelector(state => state.updateLibrary);
    const activeFilters = useSelector(state => state.filter);
    const playList = useSelector(state => state.playList);
    const filteredList = FilteredList(playList, activeFilters);
    //makes initial copy of musiclibrary to display

    useEffect(() => {
        dispatch(duplicate(musicLibrary));
    }, [musicLibrary, dispatch])

    //if activefilters length empty display playlist else display filtered lists

    return (
        <div className="playlist-container">
            <table className="playlist">
                {activeFilters.length > 0 ?
                    filteredList.map(song => {
                        return (
                            <ListItem
                                song={song}
                                key={song.id} />)
                    }) : playList.map(song => {
                        return (
                            <ListItem
                                song={song}
                                key={song.id} />)
                    })
                }

            </table>
        </div>
    );

}

export default List;