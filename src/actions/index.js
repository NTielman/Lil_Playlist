/* reducer: hideForm || usedBy: Header, Form */
export const toggleForm = () => {
    return {
        type: 'TOGGLE_FORM'
    }
}

/* reducer: createSong || usedBy: Form */
// updates inputfields on userinput
export const updateForm = (inputTarget) => {
    return {
        type: 'UPDATE-FORM',
        payload: inputTarget,
    }
}

// resets all inputfields 
export const resetForm = () => {
    return {
        type: 'RESET-FORM',
    }
}

/* reducer: updateLibrary || usedBy: Form, SideBar */
// adds new song to musicLibrary 
export const add = (song) => {
    return {
        type: 'ADD',
        payload: song,
    }
}

// removes song from musicLibrary
export const remove = (songId) => {
    return {
        type: 'REMOVE',
        payload: songId,
    }
}

/* reducer: activeSort || usedBy: SortingMenu, List */
// sorts songs by criteria: title artists etc.
export const sort = (sortCriteria) => {
    return {
        type: 'SORT',
        payload: sortCriteria,
    }
}

/* reducer: hideFilters || usedBy: SortingMenu, Menu */
// toggles filterMenu
export const toggleFilters = () => {
    return {
        type: 'TOGGLE_FILTERS'
    }
}

/* reducer: activeFilters || usedBy: FiltersMenu, List */
// returns array of active filters
export const getFilters = (genre) => {
    return {
        type: 'GET-FILTERS',
        payload: genre,
    }
}

/* reducer: expandSong || usedBy: ListItem, Sidebar */
// shows song info in sidebar
export const expandInfo = (selectedSong) => {
    return {
        type: 'EXPAND',
        payload: selectedSong,
    }
}

// clears the sidebar 
export const resetSidebar = () => {
    return {
        type: 'RESET-SIDEBAR',
    }
}