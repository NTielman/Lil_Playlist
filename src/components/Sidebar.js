/* -------------- Displays enlarged song info in sidebar -------------- */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { remove, resetSidebar } from '../actions';
import generateStars from '../functions/generateStars';

const Sidebar = () => {

    const dispatch = useDispatch();
    const selectedSong = useSelector(state => state.expandSong);
    const ratingNumber = selectedSong.rating;

    return (
        <div className='sidebar'>
            <div className="song-info-container">
                <span className="song-info-tooltip">
                    <span className="tooltiptext">
                        click on a song to display more info
                    </span>
                    <img className='sidebar-img'
                        src={selectedSong.url}
                        alt="album art">
                    </img>
                </span>
                <h3>Title: {selectedSong.title}</h3>
                <p>Artist: {selectedSong.artist}</p>
                <p>Genre: {selectedSong.genre}</p>
                <p>{generateStars(ratingNumber)}</p>
                <button
                    className="btn delete-btn"
                    onClick={() => {
                        dispatch(remove(selectedSong.id))
                        dispatch(resetSidebar())
                    }}>Delete Track
                </button>
            </div>

            <div className="about-link">
                <hr></hr>
                <Link to='/about'>
                    About Us
                </Link>
            </div>
        </div>
    );

}

export default Sidebar;