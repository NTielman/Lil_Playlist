const sortSongs = (state = [], action) => {
    //laga state bashi akiriba if(state === undefined) state = action.payload.
    //change this from reducer to function? meeskos ku filters.
    //function that takes in a playlist i sort criteria and return a song array based on that criteria

    //DOM list usestate =[] ora filters get clicked setstate = filteredlist.
    //ora sort get clicked setstate to sort whatever playlist ta den DOM 
    //so filter should always receive a full songlist (library) to filter from
    //sort should receive whatever playlist ta den e DOM ?
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