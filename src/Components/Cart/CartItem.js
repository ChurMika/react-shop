import React from 'react'
import propTypes from 'prop-types'
import './CartItem.css'


export default function CartItem (props) {


    return (
        <div className="Cart-Item" id={props.id}>
            <img src={props.img} alt='товар'></img>
            <p>{props.name}</p>
            <button>-</button>
            <p>Количество</p>
            <button>+</button>
            <button>Х</button>
        </div>
    )
}

CartItem.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    img: propTypes.string
}
CartItem.defaultProps = {}

