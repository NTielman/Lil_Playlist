const filterList = (playlist, filtersArray) => {
    let filteredList = [];

    filtersArray.forEach(filter => {
        const { genre } = filter;
        const genreList = playlist.filter(song => song.genre === genre);
        filteredList = [...filteredList, ...genreList];
    });
    return filteredList;

}

export default filterList;