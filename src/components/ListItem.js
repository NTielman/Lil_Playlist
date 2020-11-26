import React from 'react';
import { useDispatch } from 'react-redux';
import { expand } from '../actions';
import starRating from './StarRating';

const ListItem = (props) => {
    const dispatch = useDispatch();
    const ratingNumber = props.song.rating;


    return (
        <tr className="song-item"
            key={props.song.id}
            onClick={() => dispatch(expand(props.song))}>
            <td><img className="list-image"
                src={props.song.url !== '' ? props.song.url : 'https://pngimg.com/uploads/vinyl/vinyl_PNG97.png'}
                alt="album art"></img></td>
            <td className="title"><h3>{props.song.title}</h3></td>
            <td className="artist">{props.song.artist}</td>
            <td className="genre">{props.song.genre}</td>
            <td className="rating">{starRating(ratingNumber)}</td>
        </tr>
    );
}

export default ListItem;