import { ADD_NEW_ITEM } from './actions'

const initialState = {
    "items": [
        {
            'itemID': 1,
            'name': 'Наименовани 1',
            'img': '',
            'description': 'Описание Товара 1',
            'price': 15,
            'quantity': 5
        },
        {
            'itemID': 2,
            'name': 'Наименовани 2',
            'img': '',
            'description': 'Описание Товара 2',
            'price': 20,
            'quantity': 8
        },
        {
            'itemID': 3,
            'name': 'Наименовани 3',
            'img': '',
            'description': 'Описание Товара 3',
            'price': 17,
            'quantity': 0
        },
        {
            'itemID': 4,
            'name': 'Наименовани 4',
            'img': '',
            'description': 'Описание Товара 4',
            'price': 16,
            'quantity': 0
        },
        {
            'itemID': 5,
            'name': 'Наименовани 5',
            'img': '',
            'description': 'Описание Товара 5',
            'price': 14,
            'quantity': 12
        },
        {
            'itemID': 6,
            'name': 'Наименовани 6',
            'img': '',
            'description': 'Описание Товара 6',
            'price': 23,
            'quantity': 7
        },
        {
            'itemID': 7,
            'name': 'Наименовани 7',
            'img': '',
            'description': 'Описание Товара 7',
            'price': 18,
            'quantity': 1
        },
        {
            'itemID': 8,
            'name': 'Наименовани 8',
            'img': '',
            'description': 'Описание Товара 8',
            'price': 22,
            'quantity': 3
        },
        {
            'itemID': 9,
            'name': 'Наименовани 9',
            'img': '',
            'description': 'Описание Товара 9',
            'price': 25,
            'quantity': 0
        },
        {
            'itemID': 10,
            'name': 'Наименовани 10',
            'img': '',
            'description': 'Описание Товара 10',
            'price': 16,
            'quantity': 7
        },
        {
            'itemID': 11,
            'name': 'Наименовани 11',
            'img': '',
            'description': 'Описание Товара 11',
            'price': 19,
            'quantity': 6
        },
        {
            'itemID': 12,
            'name': 'Наименовани 12',
            'img': '',
            'description': 'Описание Товара 12',
            'price': 11,
            'quantity': 0
        },
        {
            'itemID': 13,
            'name': 'Наименовани 13',
            'img': '',
            'description': 'Описание Товара 13',
            'price': 17,
            'quantity': 11
        }
    ]
}

export default function stateReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_ITEM: {
            return {
                ...state,
                items: {
                    itemID: action.payload.itemID,
                    name: action.payload.name,
                    img: action.payload.img,
                    description: action.payload.description,
                    price: action.payload.price,
                    quantity: action.payload.quantity
                }
            }
        }       
        default:
            return state
    }    
}