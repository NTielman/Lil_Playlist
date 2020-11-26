const defaultFilters = {
    rock: false,
    jazz: false,
    pop: false,
    rnb: false,
    rap: false,
    lofi: false,
    latin: false,
    soul: false
}

const activeFilters = (state = defaultFilters, action) => {

    switch (action.type) {

        case 'GET-FILTERS':
            //make a copy of state
            let filters = { ...state };

            //get userinput
            const { value, checked } = action.payload;

            //update state with userinput
            filters = { ...filters, [value]: checked };
            return filters;

        default:
            return state;
    }

}

export default activeFilters;