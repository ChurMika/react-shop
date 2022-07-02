import React from 'react'
import propTypes from 'prop-types'
import { useSelector } from 'react-redux'
import './Item.css'

export default function Item (props) {

    const orders = useSelector((state) => state.orders.orders)
    console.log(orders);

    return (
        <div className="Item"  id={props.id}>
                <p className="Item-title">{props.name}</p>
                <img src={props.img} alt='товар' className="Item-img"></img>
                <p className="Item-descr">{props.description}</p>
                <p className="Item-price">Цена: {props.price}</p>
                <p className="Item-quan">Осталось {props.quantity} шт.</p>
                <button className="Item-btn" onClick={() => orders.push(props.id, props.name)}>Купить</button>
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

