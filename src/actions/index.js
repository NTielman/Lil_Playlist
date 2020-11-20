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