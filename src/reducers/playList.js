const sortSongs = (state = [], action) => {

    switch (action.type) {
        case 'DUPLICATE':
            const playList = action.payload;
            return playList;
        case 'SORT':
            const sortCriteria = action.payload;
            const { sortDirection, sortBy } = sortCriteria;
            const sortedList = state.map(song => song);

            if (sortBy === 'rating') {
                //if true sort down (a-z), if false sort up (z-a) 
                if (sortDirection) {
                    sortedList.sort((a, b) => {
                        let songA = a[sortBy];
                        let songB = b[sortBy];
                        if (songA < songB) {
                            return -1;
                        }
                        if (songA > songB) {
                            return 1;
                        }
                        return 0;
                    });
                } else {
                    sortedList.sort((a, b) => {
                        let nameA = a[sortBy];
                        let nameB = b[sortBy];
                        if (nameA < nameB) {
                            return 1;
                        }
                        if (nameA > nameB) {
                            return -1;
                        }
                        return 0;
                    });
                }
            } else {
                //if true sort down (a-z), if false sort up (z-a) 
                if (sortDirection) {
                    sortedList.sort((a, b) => {
                        let songA = a[sortBy].toUpperCase(); // ignore upper and lowercase
                        let songB = b[sortBy].toUpperCase(); // ignore upper and lowercase
                        if (songA < songB) {
                            return -1;
                        }
                        if (songA > songB) {
                            return 1;
                        }
                        return 0;
                    });
                } else {
                    sortedList.sort((a, b) => {
                        let songA = a[sortBy].toUpperCase(); // ignore upper and lowercase
                        let songB = b[sortBy].toUpperCase(); // ignore upper and lowercase
                        if (songA < songB) {
                            return 1;
                        }
                        if (songA > songB) {
                            return -1;
                        }
                        return 0;
                    });
                }
            }

            return sortedList;
        default:
            return state;
    }
}


export default sortSongs;