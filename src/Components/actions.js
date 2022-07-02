export const ADD_ITEM_TO_CART = 'MESSAGES:ADD_ITEM_TO_CART'

export const addItem = (id, name, Q) => ({
    type: ADD_ITEM_TO_CART,
    payload: {
        id,
        name
    },
})