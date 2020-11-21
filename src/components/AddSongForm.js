import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, add, update, reset } from '../actions';

const AddSongForm = () => {
    const dispatch = useDispatch();
    const newSong = useSelector(state => state.createSong);
    const ratings = [1, 2, 3, 4, 5];
    const genres = ["rock", "jazz", "pop", "rnb", "rap", "lofi", "latin", "soul"];

    return (
        <form
            className="add-song-form"
            name="add-song"
            onSubmit={(event) => {
                event.preventDefault()
                dispatch(add(newSong))
            }}>

            <input
                placeholder="Song Title..."
                type="text"
                name="title"
                value={newSong.title}
                onChange={(event) => dispatch(update(event.target))}
                className="input-field"></input>

            <input
                placeholder="Artist Name..."
                type="text"
                name="artist"
                value={newSong.artist}
                onChange={(event) => dispatch(update(event.target))}
                className="input-field"></input>

            <select
                name="genre"
                onChange={(event) => dispatch(update(event.target))}>
                <option value="" disabled selected hidden>Genre</option>
                {genres.map(genre => {
                    return (
                        <option
                            value={genre}
                            key={genres.indexOf(genre)}>{genre}</option>)
                })}</select>

            <label>Rating:</label>
            {ratings.map(index => {
                return (
                    <label key={index}>
                        <i className="fas fa-star"></i>
                        <input
                            className="radio"
                            type="radio"
                            name="rating"
                            onChange={(event) => dispatch(update(event.target))}
                            value={index}></input>
                    </label>)
            })}

            <input
                placeholder="(optional) Album Art Url..."
                type="url"
                name="url"
                value={newSong.url}
                onChange={(event) => dispatch(update(event.target))}
                className="input-field"></input>

            <button
                type="submit"
                className="btn add-btn">Add</button>

            <button
                type="reset"
                className="btn cancel-btn"
                onClick={() => {
                    dispatch(reset())
                    dispatch(toggle())
                }}>Cancel</button>
        </form>
    );
}

export default AddSongForm;