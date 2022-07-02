import React from 'react'
import { Link } from 'react-router-dom'

const Profile = (props) => {

    return (
        <div className="Profile">
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/login">Личный кабинет</Link></li>
                    <li><Link to="/cart">Корзина</Link></li>
                    <li><button>Выйти</button></li>
                </ul>
            </nav>
            <div>
                <h1>Личный кабинет</h1>
                <p>Имя: </p>
                <p>Электронная почта: </p>
                <p>Телефон: </p>
                <p>На вашем счету: </p>
                <button>Пополнить счет</button>
                    <form>
                        <h3>Обращаем Ваше внимание - Деньги будут списаны со счета номера телефона!</h3>
                        <label for='sum'>Введиту сумму для пополнения</label>
                        <input type='number' name='sum'></input>
                        <p>Пополнить</p>
                    </form>
            </div>            
        </div>
    )
}

export default Profile