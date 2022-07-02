import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import './Cart.css'

const Cart = (props) => {

    return (
        <div className="Cart">
            <nav>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/admin">Админ</Link></li>
                    <li><Link to="/login">Личный кабинет</Link></li>
                    <li><Link to="/cart">Корзина</Link></li>
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