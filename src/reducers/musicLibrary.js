const myMusic = [
    {
        title: 'Let it happen',
        artist: 'Tame Impala',
        genre: 'rock',
        rating: 5,
        url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
        id: 1,
    },
    {
        title: '24K Magic',
        artist: 'Bruno Mars',
        genre: 'jazz',
        rating: 4,
        url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
        id: 2,
    },
    {
        title: 'Umbrella',
        artist: 'Rihanna',
        genre: 'rnb',
        rating: 2,
        url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
        id: 3,
    },
    {
        title: 'Stand Still',
        artist: 'Sabrina Claudio',
        genre: 'rock',
        rating: 5,
        url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
        id: 4,
    },
];

const musicLibrary = (state = myMusic, action) => {

    switch (action.type) {
        case 'ADD':
            const newSong = action.payload;
            const id = state.length + 1;

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

export default musicLibrary;