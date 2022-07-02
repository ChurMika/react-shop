const initialState = {
    "items": [
        {
            'id': 1,
            'name': 'name 1',
            'img': '',
            'description': 'description 1',
            'price': 15,
            'quantity': 5
        },
        {
            'id': 2,
            'name': 'name 2',
            'img': '',
            'description': 'description 2',
            'price': 20,
            'quantity': 8
        },
        {
            'id': 3,
            'name': 'name 3',
            'img': '',
            'description': 'description 3',
            'price': 17,
            'quantity': 0
        },
        {
            'id': 4,
            'name': 'name 4',
            'img': '',
            'description': 'description 4',
            'price': 16,
            'quantity': 0
        },
        {
            'id': 5,
            'name': 'name 5',
            'img': '',
            'description': 'description 5',
            'price': 14,
            'quantity': 12
        }
    ],
    "profiles": [
        {
            'personalId': 1,
            'name': 'name 1',
            'email': 'admin@admin.ru',
            'password': '1234'
        },
        {
            'personalId': 2,
            'name': 'name 2',
            'email': 'test@test.ru',
            'password': '1234',
            'wallet': 1
        },
        {
            'personalId': 3,
            'name': 'name 3',
            'email': 'test1@test.ru',
            'password': '1234',
            'wallet': 15
        },
    ],
    "orders": []
}

export default function stateReducer(state = initialState) {
    return state    
}