const initialState = {
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
    ]
}

export default function profilesReducer(state = initialState) {
    return state
}