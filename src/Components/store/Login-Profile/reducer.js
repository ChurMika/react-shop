import { ADD_NEW_USER, ADD_MONEY_TO_WALLET } from './actions'

const initialState = {
    "profiles": [
        {
            'personalId': 1,
            'name': 'name 1',
            'phone': 89998887766,
            'email': 'admin@admin.ru',
            'password': '1234',
        },
        {
            'personalId': 2,
            'name': 'name 2',
            'phone': +79995554433,
            'email': 'test@test.ru',
            'password': '1234',
            'wallet': 1
        },
        {
            'personalId': 3,
            'name': 'name 3',
            'phone': 89992221100,
            'email': 'test1@test.ru',
            'password': '1234',
            'wallet': 15
        },
    ]
}

export default function profilesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_USER: {
            return {
                ...state,
                profiles: {
                    personalId: action.payload.id,
                    name: action.payload.name,
                    phone: action.payload.phone,
                    email: action.payload.email,
                    password: action.payload.password
                }
            }
        }
        case ADD_MONEY_TO_WALLET: {
            return {
                ...state,
                profiles: {
                    personalID: action.payload.personalID,
                    wallet: action.payload.wallet
                }
            }
        }        
        default:
            return state
    }
}