import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleForm, add, updateForm, resetForm } from '../actions';

const AddSongForm = () => {
    const dispatch = useDispatch();
    const newSong = useSelector(state => state.createSong);
    const ratings = [5, 4, 3, 2, 1];
    const genres = ["rock", "jazz", "pop", "rnb", "rap", "lofi", "latin", "soul"];

    return (
        <form
            className="add-song-form"
            name="add-song"
            onSubmit={(event) => {
                event.preventDefault()
                dispatch(add(newSong))
                dispatch(toggleForm())
                dispatch(resetForm())
            }}>

            <input
                placeholder="Song Title..."
                type="text"
                name="title"
                value={newSong.title}
                onChange={(event) => dispatch(updateForm(event.target))}
                className="input-field"></input>

            <input
                placeholder="Artist Name..."
                type="text"
                name="artist"
                value={newSong.artist}
                onChange={(event) => dispatch(updateForm(event.target))}
                className="input-field"></input>

            <select
                name="genre"
                onChange={(event) => dispatch(updateForm(event.target))}>
                <option value="" disabled selected hidden>Genre</option>
                {genres.map(genre => {
                    return (
                        <option
                            value={genre}
                            key={genres.indexOf(genre)}>{genre}</option>)
                })}</select>

            <span className="rating-field">
                {ratings.map(index => {
                    return (
                        <label key={index}>
                            <input
                                className="radio"
                                type="radio"
                                name="rating"
                                onChange={(event) => dispatch(updateForm
                                    (event.target))}
                                value={index}></input>
                            <i className="fas fa-star"></i>
                        </label>)
                })}
                Rating:
            </span>

            <span className="url-tooltip">
                <span className="tooltiptext">*optional: add an url to display custom album art </span>
                <input
                    placeholder="Album Art Url..."
                    type="url"
                    name="url"
                    value={newSong.url}
                    onChange={(event) => dispatch(updateForm
                        (event.target))}
                    className="input-field"></input>
            </span>

            <button
                type="submit"
                className="btn add-btn">Add</button>

            <button
                type="reset"
                className="btn cancel-btn"
                onClick={() => {
                    dispatch(resetForm())
                    dispatch(toggleForm())
                }}>Cancel</button>
        </form>
    );
}

export default AddSongForm;