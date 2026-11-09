const initialState = {
    objectList: []
}

const ObjectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_TICKETS_CUSTOMER':
            return {
                ...state,
                customerTickets : action.payload
            }
        case 'ADD_TICKET':
            return {
                ...state,
                customerTickets : [...state.customerTickets, action.payload]
            }
        case 'DELETE_TICKET':
            return {
                ...state,
                customerTickets : [...state.customerTickets.filter(t => t.ticketId !== action.payload)]
            }
        default:
            return state
    }
}

export default ObjectReducer