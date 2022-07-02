import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Item from '../Item/Item'
import './Main.css'

const Main = (props) => {

    const items = useSelector((state) => state.items)

    console.log(items)

    const newItems = items.filter((item) => item.quantity > 0)

    return (
        <div className="Main">
            <nav>
                <ul>
                    <li><Link to="/login">Личный кабинет</Link></li>
                    <li><Link to="/cart">Корзина</Link></li>
                </ul>
            </nav>
            <div>
                {items ? (
                    <div className="items">
                        {newItems.map((item) => (
                            <Item
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </div>
                ) : <p>Не удается загрузить данные</p>}
                
            </div>
        </div>
    )
}

export default Main