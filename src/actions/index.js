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

export const sort = () => {
    return {
        type: 'SORT'
    }
}

export const filter = () => {
    return {
        type: 'FILTER'
    }
}

export const toggle = () => {
    return {
        type: 'TOGGLE'
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

//every action needs a reducer 1 reducer por handle more than 1 action 