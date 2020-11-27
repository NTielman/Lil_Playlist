/* -------------- filters playlist by active genres -------------- */
const filterList = (playlist, activeFilters) => {

    //create an empty list (container) to hold all selected filterLists
    let filteredList = [];

    //turn filters object into array
    Object.entries(activeFilters).forEach(entry => {

        //[genre, ischecked] example: [jazz, true]
        const [key, value] = entry;

        //if genre is checked 
        if (value) {
            //create a playlist containing only items of that genre
            const genreList = playlist.filter(song => song.genre === key);

            //add genre playlists to filteredlist (container)
            filteredList = [...filteredList, ...genreList];
        }

    });

    return filteredList;

}

export default filterList;