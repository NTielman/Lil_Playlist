const defaultSortCriteria = {
    active: false,
    param: '',
    sortDirection: false
};

const activeSort = (state = defaultSortCriteria, action) => {

    switch (action.type) {

        case 'SORT':
            //switch sort to active, get userSelected parameter and toggle sortdirection
            const sortCriteria = {
                active: true,
                param: action.payload,
                sortDirection: !state.sortDirection
            };

            return sortCriteria;

        default:
            return state;
    }

}

export default activeSort;