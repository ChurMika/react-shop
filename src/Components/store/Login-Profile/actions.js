export const ADD_NEW_USER = 'PROFILES::ADD_NEW_USER'
export const ADD_MONEY_TO_WALLET = 'PROFILES::ADD_MONEY_TO_WALLET'

export const addUser = (personalId, name, phone, email, password) => ({
    type: ADD_NEW_USER,
    payload: {
        personalId,
        name,
        phone,
        email,
        password
    },
})

export const deposit = (personalId, wallet) => ({
    type: ADD_MONEY_TO_WALLET,
    payload: {
        personalId,
        wallet
    },
})