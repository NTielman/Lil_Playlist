const hideFilters = (state = true, action) => {

    switch (action.type) {
        case 'TOGGLE_FILTERS':
            return !state;
        default:
            return state;
    }

}

export default hideFilters;