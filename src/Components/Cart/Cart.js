import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import './Cart.css'

const Cart = (props) => {

    return (
        <div className="Cart">
            <nav>
            <nav>
                <ul className='Main-nav'>
                    <li className='Main-li'><Link to="/" className='Main-li-link'>Главная</Link></li>
                    <li className='Main-li'><Link to="/login" className='Main-li-link'>Личный кабинет</Link></li>
                </ul>
            </nav>
            </nav>
            <main className='Cart-Main'>
                <h1>Корзина</h1>
                <div className='Cart-Items'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className='Cart-Total'>
                    <div className='Cart-Total-Price'>
                        <p>Итого</p>
                        <p>Общая сумма</p>
                    </div>                
                    <button>Оплатить</button>
                </div>
            </main>
        </div>
    )
}

export default Cart