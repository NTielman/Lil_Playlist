/* -------------- Renders a list of songs (playlist) to DOM -------------- */
import React, { useEffect } from 'react';
import ListItem from './ListItem';
import filterList from '../functions/filterList';
import { useSelector, useDispatch } from 'react-redux';
import { duplicate } from '../actions';

const List = () => {

    const dispatch = useDispatch();
    const musicLibrary = useSelector(state => state.updateLibrary);
    const activeFilters = useSelector(state => state.activeFilters);
    const playList = useSelector(state => state.sortSongs);
    const filteredList = filterList(playList, activeFilters);
    const applyFilters = Object.values(activeFilters).filter(value => value === true);

    //makes initial copy of musiclibrary to display
    useEffect(() => {
        dispatch(duplicate(musicLibrary));
    }, [musicLibrary, dispatch])

    //if any filters are selected: display filtered list else display playlist
    return (
        <div className="playlist-container">
            <table className="playlist">
                <tbody>
                    {applyFilters.length > 0 ?
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
                </tbody>
            </table>
        </div>
    );

}

export default List;