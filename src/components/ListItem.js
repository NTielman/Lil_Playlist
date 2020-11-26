import React from 'react';
import { useDispatch } from 'react-redux';
import { expandInfo } from '../actions';
import starRating from './StarRating';

const ListItem = (props) => {
    const dispatch = useDispatch();
    const ratingNumber = props.song.rating;


    return (
        <tr className="song-item"
            key={props.song.id}
            onClick={() => dispatch(expandInfo(props.song))}>
            <td><img className="song-item-image"
                src={props.song.url}
                alt="album art"></img></td>
            <td className="song-item-data"><h3>{props.song.title}</h3></td>
            <td className="song-item-data">{props.song.artist}</td>
            <td className="song-item-data">{props.song.genre}</td>
            <td className="song-item-data">{starRating(ratingNumber)}</td>
        </tr>
    );
}

export default ListItem;