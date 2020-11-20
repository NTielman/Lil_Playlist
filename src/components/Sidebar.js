import React from 'react';

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
                <p>About Us</p>
            </div>
        );
    } else {
        return null;
    }

}

export default Sidebar;