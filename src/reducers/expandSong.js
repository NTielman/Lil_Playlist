const defaultSong = {
    title: '',
    artist: '',
    genre: '',
    rating: '',
    url: 'https://pngimg.com/uploads/vinyl/vinyl_PNG97.png',
    id: '',
}

const expandSong = (state = defaultSong, action) => {

    switch (action.type) {

        case 'EXPAND':
            //get song data from user-selected song
            const { title, artist, genre, rating, url, id } = action.payload;

            //update state with new data
            return {
                title,
                artist,
                genre,
                rating,
                url,
                id,
            };

        case 'RESET-SIDEBAR':

            return defaultSong;

        default:
            return state;
    }
}

export default expandSong;