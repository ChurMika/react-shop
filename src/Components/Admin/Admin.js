import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Item from '../Item/Item'
import { createItem } from '../store/Main/actions'
import './Admin.css'



const Admin = (props) => {

    const items = useSelector((state) => state.items.items)
    const dispatch = useDispatch()

    const [name, setName] = useState()
    const [descr, setDescr] = useState()
    const [img, setImg] = useState()
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()

    const noItems = items.filter((item) => item.quantity === 0)

    function addNewItem () {
        let newItem = document.querySelector('.Admin-addNew-title')
        newItem.classList.toggle('Display-none')
    }

    function chekNoItems () {
        let itemsNo = document.querySelector('.Items-no')
        itemsNo.classList.toggle('Display-none')
    }

    function analitics () {
        let analitic = document.querySelector('.Admin-analitics-text')
        analitic.classList.toggle('Display-none')
    }

    function createNewItem () {
        let newName = name
        let newDescr = descr
        let newimg = img
        let newPrice = price
        let newQuantity = quantity

        dispatch(createItem(newName, newDescr, newimg, newPrice, newQuantity))
    }

    return (
        <div className="Admin">
            <nav>
                <ul className='Main-nav'>
                    <li className='Main-li'><Link to="/" className='Main-li-link'>Главная</Link></li>
                    <li className='Main-li'><Link to="/cart" className='Main-li-link'>Корзина</Link></li>
                    <li className='Main-li'><button>Выйти</button></li>
                </ul>
            </nav>
            <h1 className='Admin-title'>Admin</h1>
            <div className='Admin-main'>
                <div className='Admin-addNew'>
                    <button className='Admin-btn' onClick={addNewItem}>Добавить новый товар</button>
                    <div className='Admin-addNew-title Display-none'>
                        <form className='Admin-addNew-form' onClick={createNewItem}>
                            <input type="text" 
                            placeholder='Название товара'
                            className='Admin-addNew-input'
                            onChange={(e) => setName(e.target.value)}
                            ></input>

                            <input type="textarea" 
                            placeholder='Описание товара'
                            className='Admin-addNew-input'
                            onChange={(e) => setDescr(e.target.value)}
                            ></input>

                            <input type="number" 
                            placeholder='Цена'
                            className='Admin-addNew-input'
                            onChange={(e) => setPrice(e.target.value)}
                            ></input>

                            <input type="number" 
                            placeholder='Количество на складе'
                            className='Admin-addNew-input'
                            onChange={(e) => setQuantity(e.target.value)}
                            ></input>

                            <input type="file" 
                            placeholder='Загрузите фото'
                            className='Admin-addNew-input'
                            onChange={(e) => setImg(e.target.value)}
                            ></input>

                            <button className='Admin-addNew-btn'>Отправить</button>
                        </form>
                    </div>
                </div>
                <div className='Admin-check'>
                    <button className='Admin-btn' onClick={chekNoItems}>Товары закончились</button>
                    {items ? (
                        <div className="Items-no Display-none">
                            {noItems.map((item) => (
                                <Item
                                    key={item.id}
                                    {...item}
                                />                            
                            ))}
                        </div>
                    ) : <p>Нет товаров, которые нужно заказать</p>}
                </div>
                <div className='Admin-analitics'>
                    <button onClick={analitics} className='Admin-btn'>Получить аналитику сайта</button>
                    <p className='Admin-analitics-text Display-none'>К сожалению, данная функция сейчас недоступна!</p> 
                </div>
            </div>
        </div>
    )
}

export default Admin