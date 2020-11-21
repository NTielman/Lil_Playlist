import { combineReducers } from 'redux';
import createSong from './createSong';
import filterSongs from './filterSongs';
import sortSongs from './sortSongs';
import isHidden from './isHidden';
import expandSong from './expandSong';
import musicLibrary from './musicLibrary';

const allReducers = combineReducers({
    createSong,
    // filterSongs,
    // sortSongs,
    isHidden,
    expandSong,
    musicLibrary,
});

export default allReducers;