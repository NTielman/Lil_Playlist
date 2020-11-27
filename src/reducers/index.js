import { combineReducers } from 'redux';
import createSong from './createSong';
import hideFilters from './hideFilters';
import sortSongs from './sortSongs';
import hideForm from './hideForm';
import expandSong from './expandSong';
import updateLibrary from './updateLibrary';
import activeFilters from './activeFilters';

const allReducers = combineReducers({
    createSong,
    hideFilters,
    sortSongs,
    hideForm,
    expandSong,
    updateLibrary,
    activeFilters,
});

export default allReducers;