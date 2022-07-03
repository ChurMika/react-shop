export const ADD_NEW_ITEM = 'ORDERS::ADD_NEW_ITEM'

export const createItem = (itemID, name, img, description, price, quantity) => ({
    type: ADD_NEW_ITEM,
    payload: {
        itemID, 
        name, 
        img, 
        description, 
        price, 
        quantity
    },
})
