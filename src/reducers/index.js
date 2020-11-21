import { combineReducers } from 'redux';
import removeSong from './removeSong';
import addSong from './addSong';
import filterSongs from './filterSongs';
import sortSongs from './sortSongs';
import isHidden from './isHidden';

const allReducers = combineReducers({
    // removeSong,
    // addSong,
    // filterSongs,
    // sortSongs,
    isHidden,
});

export default allReducers;