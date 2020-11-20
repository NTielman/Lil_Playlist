import { combineReducers } from 'redux';
import removeSong from './removeSong';
import addSong from './addSong';
import filterSongs from './filterSongs';
import sortSongs from './sortSongs';

const allReducers = combineReducers({
    removeSong,
    addSong,
    filterSongs,
    sortSongs,
});

export default allReducers;