export const remove = (num) => {
    return {
        type: 'REMOVE',
        payload: num,
    }
}

export const add = () => {
    return {
        type: 'ADD'
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

//every action needs a reducer 1 reducer por handle more than 1 action 