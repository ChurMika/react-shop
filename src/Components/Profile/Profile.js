import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../store/Login-Profile/actions'

const Profile = (props) => {

    const profiles = useSelector((state) => state.profiles.profiles)
    const dispatch = useDispatch()

    const [newWallet, setWallet] = useState()

    function addMoney () {
        dispatch(addUser(profiles.personalID, newWallet))
    }

    return (
        <div className="Profile">
            <nav>
                <ul className='Main-nav'>
                    <li className='Main-li'><Link to="/" className='Main-li-link'>Главная</Link></li>
                    <li className='Main-li'><Link to="/cart" className='Main-li-link'>Корзина</Link></li>
                    <li className='Main-li'><button>Выйти</button></li>
                </ul>
            </nav>
            <div>
                <h1>Личный кабинет</h1>
                <p>Имя: {profiles.name}</p>
                <p>Электронная почта: {profiles.email}</p>
                <p>Телефон: {profiles.phone}</p>
                <p>На вашем счету: {profiles.wallet}</p>
                    <form>
                        <h3>Обращаем Ваше внимание - Деньги будут списаны со счета номера телефона!</h3>
                        <label for='sum'>Введиту сумму для пополнения</label>
                        <input type='number' name='sum' required
                        onChange={(e) => setWallet(e.target.value)}
                        ></input>
                        <button onClick={addMoney}>Пополнить счет</button>
                    </form>
            </div>            
        </div>
    )
}

export default Profile