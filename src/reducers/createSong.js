const newSong = {
    title: '',
    artist: '',
    genre: '',
    rating: '',
    url: '',
}

const createSong = (state = newSong, action) => {

    switch (action.type) {
        case 'UPDATE':
            const target = action.payload;
            const { name, value } = target;

            return {
                ...state,
                [name]: value
            };
        case 'RESET':
            return {
                title: '',
                artist: '',
                genre: '',
                rating: '',
                url: '',
            };
        default:
            return state;
    }
}

export default createSong;