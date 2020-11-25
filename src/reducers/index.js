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
//header tin ku use state that tells it what genre is chosen {genre: url, jazz: url, rock:url} etc
//setinterval to render backgroundimages
//style animation filter menu
//hover effects items
//functie ku ta return <i fas fa star based on num < rating.
//fix table di songs title mester para bou di title etc. html tables styling
//vul in database of songs
//some components bijv addform i toggle can use local states usestate()?