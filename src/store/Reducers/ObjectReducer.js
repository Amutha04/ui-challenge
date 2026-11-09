const initialState = {
    objectList: []
}

const ObjectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_OBJECTS':
            return {
                ...state,
                objectList : action.payload
            }
        case 'ADD_OBJECT':
            return {
                ...state,
                objectList : [...state.objectList, action.payload]
            }
        case 'DELETE_OBJECT':
            return {
                ...state,
                objectList : [...state.objectList.filter(obj => obj.id !== action.payload)]
            }
        default:
            return state
    }
}

export default ObjectReducer