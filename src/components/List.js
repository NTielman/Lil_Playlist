import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

const List = () => {

    const playList = useSelector(state => state.playList);

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