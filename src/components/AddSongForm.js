import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../actions';

const AddSongForm = () => {
    const dispatch = useDispatch();
    const ratings = [1, 2, 3, 4, 5];
    //array for genres i.map to make option list

    return (
        <form className="add-song-form" name="add-song">
            <input
                placeholder="Song Title..."
                type="text"
                name="title"
                className="input-field"></input>

            <input
                placeholder="Artist Name..."
                type="text"
                name="artist"
                className="input-field"></input>

            <select name="genre">
                <option value="" disabled selected hidden>Genre</option>
                <option value="rock">Rock</option>
                <option value="jazz">Jazz</option>
                <option value="pop">Pop</option>
                <option value="rnb">R&B</option>
                <option value="rap">Rap</option>
                <option value="lofi">Lo-Fi</option>
                <option value="latin">Latin</option>
                <option value="soul">Soul</option>
            </select>

            <label>Rating:</label>
            {ratings.map(index => {
                return (
                    <label key={index}>
                        <i className="fas fa-star"></i>
                        <input
                            className="radio"
                            type="radio"
                            name="rating"
                            key={index}
                            value={index}></input>
                    </label>)
            })}

            <input
                placeholder="(optional) Album Art Url..."
                type="url"
                name="url"
                className="input-field"></input>
            <button
                type="submit"
                className="btn add-btn">Add</button>
            <button
                type="reset"
                className="btn cancel-btn"
                onClick={() => dispatch(toggle())}>Cancel</button>
        </form>
    );
}

export default AddSongForm;