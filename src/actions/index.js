export const remove = (songId) => {
    return {
        type: 'REMOVE',
        payload: songId,
    }
}

export const add = (song) => {
    return {
        type: 'ADD',
        payload: song,
    }
}

export const update = (inputTarget) => {
    return {
        type: 'UPDATE',
        payload: inputTarget,
    }
}

export const reset = () => {
    return {
        type: 'RESET',
    }
}

export const sort = (sortCriteria) => {
    return {
        type: 'SORT',
        payload: sortCriteria,
    }
}

export const filter = (genre) => {
    return {
        type: 'FILTER',
        payload: genre,
    }
}

export const toggleForm = () => {
    return {
        type: 'TOGGLE_FORM'
    }
}

export const toggleFilters = () => {
    return {
        type: 'TOGGLE_FILTERS'
    }
}

export const expand = (selectedSong) => {
    return {
        type: 'EXPAND',
        payload: selectedSong,
    }
}

export const clear = () => {
    return {
        type: 'CLEAR',

    }
}

export const duplicate = (musicList) => {
    return {
        type: 'DUPLICATE',
        payload: musicList,

    }
}