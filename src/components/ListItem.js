import React from 'react';
import { useDispatch } from 'react-redux';
import { expand } from '../actions';

const ListItem = (props) => {
    const dispatch = useDispatch();
    return (
        <li className="song-item"
            key={props.song.id}
            onClick={() => dispatch(expand(props.song))}>
            <img src={props.song.url}
                alt="album art"></img>
            <h3>{props.song.title}</h3>
            <p>{props.song.artist}</p>
            <p>{props.song.rating}</p>
        </li>
    );
}

export default ListItem;