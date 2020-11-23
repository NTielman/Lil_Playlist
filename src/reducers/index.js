import { combineReducers } from 'redux';
import createSong from './createSong';
import filterSongs from './filterSongs';
import playList from './playList';
import hideForm from './hideForm';
import expandSong from './expandSong';
import musicLibrary from './musicLibrary';

const allReducers = combineReducers({
    createSong,
    filterSongs,
    playList,
    hideForm,
    expandSong,
    musicLibrary,
});

export default allReducers;

//how to style ratings stars 
//header tin ku use state that tells it what genre is chosen
//filtermenu