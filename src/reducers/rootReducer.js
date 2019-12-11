const intialState = {
    counter: 0,
    ideasList: []
}

function rootReducer(state = intialState, action) {
    switch (action.type) {
        case 'STORE_ALL_IDEAS':
            return {...state, counter: action.ideasList.length ,ideasList: action.ideasList}
        case 'ADD_IDEA':
            return { ...state, counter: action.counter };
        case 'DELETE_IDEA':
            return { ...state, counter: action.counter };
        default:
            return state
    }
}

export default rootReducer;