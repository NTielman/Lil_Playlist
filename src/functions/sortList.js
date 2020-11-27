/* -------------- sorts playlist by active sortcriteria -------------- */
const sortList = (playlist, activeSort) => {

    //get userselected direction + sortingParameter (rating, artist, etc.)
    const { param, sortDirection } = activeSort;
    const sortedList = playlist.map(song => song);

    //sorts from A-Z a-z 1-5
    const sortDown = (songA, songB) => {

        if (songA < songB) {
            return -1;
        }
        if (songA > songB) {
            return 1;
        }
        return 0;
    };

    //sorts from Z-A z-a 5-1
    const sortUp = (songA, songB) => {

        if (songA < songB) {
            return 1;
        }
        if (songA > songB) {
            return -1;
        }
        return 0;
    };

    //if sorting by number
    if (param === 'rating') {

        //if true sort down (1-5)
        if (sortDirection) {
            sortedList.sort((a, b) => {
                const songA = a[param];
                const songB = b[param];
                return sortDown(songA, songB);
            });
        } else { //if false sort up (5-1) 
            sortedList.sort((a, b) => {
                const songA = a[param];
                const songB = b[param];
                return sortUp(songA, songB);
            });
        }
    } else if (param === 'title' || param === 'artist') { //if sorting by letter

        //if true sort down (a-z) 
        if (sortDirection) {
            sortedList.sort((a, b) => {
                // ignore upper and lowercase
                const songA = a[param].toUpperCase();
                const songB = b[param].toUpperCase();
                return sortDown(songA, songB);
            });
        } else { //if false sort up (z-a) 
            sortedList.sort((a, b) => {
                // ignore upper and lowercase
                const songA = a[param].toUpperCase();
                const songB = b[param].toUpperCase();
                return sortUp(songA, songB);
            });
        }
    }

    return sortedList;

}

export default sortList;