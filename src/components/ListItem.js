import React from 'react';

const ListItem = (props) => {
    return (
        <li className="song-item"
            key={props.song.id}>
            <img src={props.song.url}
                alt="album art"></img>
            <h3>{props.song.title}</h3>
            <p>{props.song.artist}</p>
            <p>{props.song.rating}</p>
        </li>
    );
}

export default ListItem;