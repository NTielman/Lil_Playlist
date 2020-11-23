import React, { useEffect } from 'react';
import ListItem from './ListItem';
import { useSelector, useDispatch } from 'react-redux';
import { duplicate } from '../actions';

const List = () => {
    const dispatch = useDispatch();
    const musicLibrary = useSelector(state => state.updateLibrary);
    const playList = useSelector(state => state.playList);
    //makes initial copy of musiclibrary to display

    useEffect(() => {
        dispatch(duplicate(musicLibrary));
    }, [musicLibrary, dispatch])

    return (

        <ul>
            {playList.map(song => {
                return (
                    <ListItem
                        song={song}
                        key={song.id} />)
            })}
        </ul>
    );
}

export default List;