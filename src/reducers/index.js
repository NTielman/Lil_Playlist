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

//vul in database of songs
//fix headercarousel rerenders everytime button is clicked
//some components bijv addform i toggle can use local states usestate()?