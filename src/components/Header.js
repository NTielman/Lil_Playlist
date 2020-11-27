/* -------------- Renders a header with changing background image -------------- */
import React from 'react';
import Form from './Form';
import { useSelector, useDispatch } from 'react-redux';
import { toggleForm } from '../actions';
import headerCarousel from '../functions/headerCarousel';

const headerStyle = {
    backgroundImage: `url(${headerCarousel()})`
}

const Header = () => {

    const isHidden = useSelector(state => state.hideForm);
    const dispatch = useDispatch();

    return (
        <header style={headerStyle} >
            {isHidden ?
                <button
                    className="btn display-form-btn"
                    onClick={() => dispatch(toggleForm())}>Add a song
                </button> : null}
            {isHidden ? null : <Form />}
        </header>
    );

}

export default Header;