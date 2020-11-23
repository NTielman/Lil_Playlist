import { combineReducers } from 'redux';
import createSong from './createSong';
import hideFilters from './hideFilters';
import playList from './playList';
import hideForm from './hideForm';
import expandSong from './expandSong';
import updateLibrary from './updateLibrary';
import filter from './filter';

const allReducers = combineReducers({
    createSong,
    hideFilters,
    playList,
    hideForm,
    expandSong,
    updateLibrary,
    filter,
});

export default allReducers;

//how to style ratings stars 
//header tin ku use state that tells it what genre is chosen
//filtermenu
//seperate file pa music library import it directly into playlist.