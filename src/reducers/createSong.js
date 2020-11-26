const defaultSong = {
    title: '',
    artist: '',
    genre: '',
    rating: '',
    url: '',
}

const createSong = (state = defaultSong, action) => {

    switch (action.type) {

        case 'UPDATE-FORM':
            //get userinput
            const { name, value } = action.payload;

            //update state with userinput
            return { ...state, [name]: value };

        case 'RESET-FORM':

            return defaultSong;

        default:
            return state;
    }
}

export default createSong;