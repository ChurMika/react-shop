export const ADD_ITEM_TO_CART = 'ORDERS::ADD_CHAT'

export const addItem = (itemID, name, Q) => ({
    type: ADD_ITEM_TO_CART,
    payload: {
        itemID,
        name,
        Q
    },
})