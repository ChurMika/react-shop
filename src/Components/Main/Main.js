import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Item from '../Item/Item'
import './Main.css'

const Main = (props) => {

    const items = useSelector((state) => state.items.items)

    const newItems = items.filter((item) => item.quantity > 0)

    return (
        <div className="Main">
            <nav>
                <ul className='Main-nav'>
                    <li className='Main-li'><Link to="/admin" className='Main-li-link'>Админ</Link></li>
                    <li className='Main-li'><Link to="/login" className='Main-li-link'>Личный кабинет</Link></li>
                    <li className='Main-li'><Link to="/cart" className='Main-li-link'>Корзина</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Выберите товары</h1>
                {items ? (
                    <div className="Items">
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