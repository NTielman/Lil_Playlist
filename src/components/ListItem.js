import React from 'react';
import { useDispatch } from 'react-redux';
import { expand } from '../actions';

const ListItem = (props) => {
    const dispatch = useDispatch();
    return (
        <li className="song-item"
            key={props.song.id}
            onClick={() => dispatch(expand(props.song))}>
            <img className="list-image"
                src={props.song.url !== '' ? props.song.url : 'https://pngimg.com/uploads/vinyl/vinyl_PNG97.png'}
                alt="album art"></img>
            <h3>{props.song.title}</h3>
            <p className="artist">{props.song.artist}</p>
            <p className="genre">{props.song.genre}</p>
            <p className="rating">{props.song.rating}</p>
        </li>
    );
}

export default ListItem;