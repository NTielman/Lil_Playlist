const activeFilters = (state = [], action) => {

    switch (action.type) {

        case 'GET-FILTERS':
            const target = action.payload;
            const { name, value } = target;
            const activeFilter = { [name]: value };

            if (target.checked) {
                return [...state, activeFilter];
            } else {
                return state.filter(genre => genre[name] !== value);
            }

        default:
            return state;
    }
}

export default activeFilters;