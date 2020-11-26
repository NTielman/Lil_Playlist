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

//vul in database of songs
//split sortmenu into menu i sortmenu child
// rename components i change den components i app: Form
//fix sortmenu overload ora dispatch gets called test if object is valid before accessing properties
//fix headercarousel rerenders everytime button is clicked
