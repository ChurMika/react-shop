import React from 'react'
import propTypes from 'prop-types'
import './Item.css'

export default function Item (props) {
    return (
        <div className="Item">
            <div className='Item-descr' id={props.id}>
                <p>{props.name}</p>
                <img src={props.img} alt='товар'></img>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <p>{props.quantity}</p>
                <button>Купить</button>
            </div>       
        </div>
    )
}

Item.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
    img: propTypes.string,
    description: propTypes.string,
    price: propTypes.number,
    quantity: propTypes.number
}
Item.defaultProps = {}

