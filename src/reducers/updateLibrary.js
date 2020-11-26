import musicLibrary from './musicLibrary';
const myMusic = musicLibrary;

const updateLibrary = (state = myMusic, action) => {

    switch (action.type) {
        case 'ADD':
            const newSong = action.payload;
            const id = state.length + 1;

            if (newSong.url === '') {
                newSong.url = 'https://pngimg.com/uploads/vinyl/vinyl_PNG97.png';
            }

            return [
                ...state,
                {
                    ...newSong,
                    id
                }
            ];

        case 'REMOVE':
            const songId = action.payload;
            let indexId = 0;
            const filteredList = state.filter(song => song.id !== songId);
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