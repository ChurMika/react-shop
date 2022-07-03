import { ADD_ITEM_TO_CART } from './actions'

const initialState = {
    "orders": [{id: 1, name: 'Товар 1', Q:1}]
}

export default function ordersReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            return {
                ...state,
                [action.payload.id]: [action.payload.name, action.payload.Q = 1]
            }
        }
        default:
            return state
    }
}