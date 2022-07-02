import React from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import './Admin.css'

const Admin = (props) => {

    return (
        <div className="Admin">
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><button>Выйти</button></li>
                </ul>
            </nav>
            <h1>Admin</h1>
            <div className='Admin-main'>
                <div className='Admin-addNew'>
                    <button className='Admin-addNew-btn'>Добавить новый товар</button>
                    <div>
                        <form className='Admin-addNew-form'>
                            Название товара: <br />
                            <input type="text"></input>
                            Описание товара: <br />
                            <input type="textarea"></input>
                            Количество товара на складе: <br />
                            <input type="number"></input>
                            Фото товара: <br />
                            <input type="file"></input>
                            <br />
                            <p>Отправить</p>
                        </form>
                    </div>
                </div>
                <div className='Admin-check'>
                    <button>Проверить закончившийся товар</button>
                    <div className='Admin-check-none'>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
                <div className='Admin-analitics'>
                    <button>Получить аналитику сайта</button>
                    <p className='Admin-analitics-text'>К сожалению, данная функция сейчас недоступна!</p>
                </div>
            </div>
        </div>
    )
}

export default Admin