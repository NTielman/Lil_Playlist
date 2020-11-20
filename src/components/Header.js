import React from 'react';
import AddSongForm from './AddSongForm';

const Header = () => {
    const tempBool = false;
    //onclick !tempbool
    return (
        <header>
            <button className="btn display-form-btn">Add a song</button>
            {tempBool ? null : <AddSongForm />}
        </header>
    );
}

export default Header;