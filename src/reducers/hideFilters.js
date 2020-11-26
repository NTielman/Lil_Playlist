const hideFilters = (state = true, action) => {

    switch (action.type) {

        case 'TOGGLE_FILTERS':
            //return opposite of state
            return !state;

        default:
            return state;
    }

}

export default hideFilters;