import musicLibrary from '../functions/musicLibrary';

//set state equal to music database
const updateLibrary = (state = musicLibrary, action) => {

    switch (action.type) {

        case 'ADD':
            //get new song item from userinput
            const newSong = action.payload;

            //calculate new id for song 
            newSong.id = state.length + 1;

            //if url field was left empty, set url to default album image
            if (newSong.url === '') {
                newSong.url = 'https://pngimg.com/uploads/vinyl/vinyl_PNG97.png';
            }

            //add new song to state
            return [...state, newSong];

        case 'REMOVE':
            //get id from song user wants removed
            const songId = action.payload;

            //remove song from library
            const filteredList = state.filter(song => song.id !== songId);

            //reassign new id's to all songs in library
            let indexId = 0;
            const updatedList = filteredList.map(song => {
                indexId++;
                return { ...song, id: indexId };
            });

            return updatedList;

        default:
            return state;
    }

}

export default updateLibrary;