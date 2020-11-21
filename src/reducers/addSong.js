// const state = [
//     {
//         newSong: {
//             title: '',
//             artist: '',
//             genre: '',
//             rating: '',
//             url: '',
//             id: '',
//         }
//     },
//     {
//         musicLibrary: [
//             {
//                 title: 'Let it happen',
//                 artist: 'Tame Impala',
//                 genre: 'rock',
//                 rating: 5,
//                 url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
//                 id: 1,
//             }
//         ]
//     }
// ]

// const musicLibrary = [
//     {
//         title: 'Let it happen',
//         artist: 'Tame Impala',
//         genre: 'rock',
//         rating: 5,
//         url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
//         id: 1,
//     },
//     {
//         title: '24K Magic',
//         artist: 'Bruno Mars',
//         genre: 'jazz',
//         rating: 4,
//         url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
//         id: 2,
//     },
//     {
//         title: 'Umbrella',
//         artist: 'Rihanna',
//         genre: 'rnb',
//         rating: 2,
//         url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
//         id: 3,
//     },
//     {
//         title: 'Stand Still',
//         artist: 'Sabrina Claudio',
//         genre: 'rock',
//         rating: 5,
//         url: 'https://media.npr.org/assets/img/2015/07/08/tame-impala-cover2_sq-27bec311716548d1d706ac5eaff060d2cb6bc7ab.jpg',
//         id: 4,
//     },
// ];

const newSong = {
    title: '',
    artist: '',
    genre: '',
    rating: '',
    url: '',
    id: '',
}

const addSong = (state = newSong, action) => {

    switch (action.type) {
        case 'ADD':
            //sla op e new song by using userinputs
            //add new song to music library
            return {
                ...state,
                id: 8
            };
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
                id: '',
            };
        default:
            return state;
    }
}

export default addSong;

// addItem() {
//     
//     const itemId = this.state.groceryItems.length + 1;
//     const newItem = { id: itemId, title: userInput, amount: 1 };

//     this.setState(prevState => {
//         const newArray = prevState.groceryItems.map(obj => obj);
//         newArray.push(newItem);
//         return ({ groceryItems: newArray });

//     });

// }