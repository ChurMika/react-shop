import React from 'react'
import propTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../store/Cart/actions'
import './Item.css'

export default function Item (props) {

    const orders = useSelector((state) => state.orders.orders)
    const dispatch = useDispatch()

    return (
        <div className="Item"  id={props.itemID}>
                <p className="Item-title">{props.name}</p>
                <img src={props.img} alt='товар' className="Item-img"></img>
                <p className="Item-descr">{props.description}</p>
                <p className="Item-price">Цена: {props.price}</p>
                <p className="Item-quan">Осталось {props.quantity} шт.</p>
                <button className="Item-btn" onClick={() => {dispatch(addItem(props.itemID, props.name))}}>Купить</button>
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

