const expandedSong = {
    title: '',
    artist: '',
    genre: '',
    rating: '',
    url: 'https://pngimg.com/uploads/vinyl/vinyl_PNG97.png',
    id: '',
}

const expandSong = (state = expandedSong, action) => {

    switch (action.type) {
        case 'EXPAND':
            const selectedSong = action.payload;
            const { title, artist, genre, rating, url, id } = selectedSong;
            return {
                title,
                artist,
                genre,
                rating,
                url,
                id,
            };
        case 'CLEAR':
            return {
                title: '',
                artist: '',
                genre: '',
                rating: '',
                url: 'https://w7.pngwing.com/pngs/552/280/png-transparent-phantasy-ghost-culture-vinyl-disc-phonograph-record-lp-record-vinyl-miscellaneous-phonograph-gramophone-record.png',
                id: '',
            };
        default:
            return state;
    }
}

export default expandSong;