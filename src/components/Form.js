/* -------------- Renders a form to add new songs to playlist -------------- */
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
                type="text"
                name="title"
                placeholder="Song Title..."
                value={newSong.title}
                onChange={(event) => dispatch(updateForm(event.target))}
                className="input-field">
            </input>

            <input
                type="text"
                name="artist"
                placeholder="Artist Name..."
                value={newSong.artist}
                onChange={(event) => dispatch(updateForm(event.target))}
                className="input-field">
            </input>

            <select
                name="genre"
                onChange={(event) => dispatch(updateForm(event.target))}>
                <option value="" disabled selected hidden>Genre</option>
                {genres.map(genre => {
                    return (
                        <option
                            value={genre}
                            key={genres.indexOf(genre)}>{genre}
                        </option>)
                })}
            </select>

            <span className="rating-field">
                {ratings.map(number => {
                    return (
                        <label key={number}>
                            <input
                                type="radio"
                                name="rating"
                                value={number}
                                onChange={(event) => dispatch(updateForm
                                    (event.target))}
                                className="radio"></input>
                            <i className="fas fa-star"></i>
                        </label>)
                })} Rating:
            </span>

            <span className="url-tooltip">
                <span className="tooltiptext">
                    *optional: add an url to display custom album art
                </span>
                <input
                    type="url"
                    name="url"
                    placeholder="Album Art Url..."
                    value={newSong.url}
                    onChange={(event) => dispatch(updateForm
                        (event.target))}
                    className="input-field">
                </input>
            </span>

            <button
                type="submit"
                className="btn add-btn">Add
            </button>

            <button
                type="reset"
                className="btn cancel-btn"
                onClick={() => {
                    dispatch(resetForm())
                    dispatch(toggleForm())
                }}>Cancel
            </button>

        </form>
    );

}

export default AddSongForm;