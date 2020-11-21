import React from 'react';
import AddSongForm from './AddSongForm';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../actions';

const Header = () => {
    const isHidden = useSelector(state => state.isHidden);
    const dispatch = useDispatch();

    return (
        <header>
            {isHidden ? <button
                className="btn display-form-btn"
                onClick={() => dispatch(toggle())}>Add a song</button> : null}
            {isHidden ? null : <AddSongForm />}
        </header>
    );
}

export default Header;