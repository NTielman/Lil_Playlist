import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    if (props === true) {
        return (
            <div className='sidebar-container'>
                <div className="song-info-container">
                    <img className='sidebar-img'
                        src={props.song.url}
                        alt="album art"></img>
                    <h3>Title: {props.song.title}</h3>
                    <p>Artist: {props.song.artist}</p>
                    <p>Genre: {props.song.genre}</p>
                    <p>{props.song.rating}</p>
                    <button>Delete Track</button>
                </div>
                <br></br>
                <hr></hr>
                <Link to='/about'>
                    About Us
                </Link>
            </div>
        );
    } else {
        return (
            <div className='sidebar-container'>
                <div className="song-info-container">
                    <img className='sidebar-img'
                        src='https://w7.pngwing.com/pngs/552/280/png-transparent-phantasy-ghost-culture-vinyl-disc-phonograph-record-lp-record-vinyl-miscellaneous-phonograph-gramophone-record.png'
                        alt="album art placeholder"></img>
                    <h3>Title:</h3>
                    <p>Artist:</p>
                    <p>Genre:</p>
                    <p>0</p>
                    <button>Delete Track</button>
                </div>
                <br></br>
                <hr></hr>
                <Link to='/about'>
                    About Us
                </Link>
            </div>
        );
    }

}

export default Sidebar;