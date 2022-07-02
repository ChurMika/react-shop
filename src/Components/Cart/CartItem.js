import React from 'react'
import './CartItem.css'

const CartItem = (props) => {

    return (
        <div className="Cart-Item">
            <img src='#' alt='товар'></img>
            <p>Название товара</p>
            <button>-</button>
            <p>Количество товара</p>
            <button>+</button>
            <button>Х</button>
        </div>
    )
}

export default CartItem