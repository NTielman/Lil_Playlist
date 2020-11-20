import React from 'react';
import ListItem from './ListItem';

const tempSong = {
    title: 'Let it happen',
    artist: 'Tame Impala',
    genre: 'rock',
    rating: 5,
    url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
    id: 1,
}

const List = () => {
    //playlist.map => listItem
    return (

        <ul>
            <ListItem song={tempSong} />
        </ul>
    );
}

export default List;