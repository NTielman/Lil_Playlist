/* -------------- Renders an individual song item  -------------- */
import React from 'react';
import { useDispatch } from 'react-redux';
import { expandInfo } from '../actions';
import generateStars from '../functions/generateStars';

const ListItem = (props) => {

    const dispatch = useDispatch();
    const ratingNumber = props.song.rating;

    return (
        <tr className="song-item"
            key={props.song.id}
            onClick={() => dispatch(expandInfo(props.song))}>
            <td>
                <img className="song-item-image"
                    src={props.song.url}
                    alt="album art">
                </img>
            </td>
            <td className="song-item-data"><h3>{props.song.title}</h3></td>
            <td className="song-item-data">{props.song.artist}</td>
            <td className="song-item-data">{generateStars(ratingNumber)}</td>
            <td className="song-item-data">{props.song.genre}</td>
        </tr>
    );

}

export default ListItem;