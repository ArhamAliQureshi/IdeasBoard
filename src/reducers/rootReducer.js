const intialState = {
    counter: 0,
    ideasList: [],
    notification: {}
}

function rootReducer(state = intialState, action) {
    switch (action.type) {
        case 'STORE_ALL_IDEAS':
            return {...state, ...action, counter: action.ideasList.length}
        case 'ADD_IDEA_ASYNC':
            return { ...state, ...action, counter: action.ideasList.length};
        case 'DELETE_IDEA_ASYNC':
            return { ...state, ...action, counter: action.ideasList.length};
        case 'UPDATE_IDEA_ASYNC':
            return { ...state, ...action, counter: action.ideasList.length };
        default:
            return state
    }
}

export default rootReducer;