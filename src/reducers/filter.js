const filterSongs = (state = [], action) => {

    switch (action.type) {

        case 'FILTER':
            const target = action.payload;
            const { name, value } = target;
            if (target.checked) {
                const filteredList = state.filter(song => song[name] === value);
                return filteredList;
            } else {
                return state;
            }

        default:
            return state;
    }
}

export default filterSongs;