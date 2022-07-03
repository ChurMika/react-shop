import {React, useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../store/Login-Profile/actions'
import './AddNewUser.css'

const AddNewUser = (props) => {

    const profile = useSelector((state) => state.profiles.profiles)
    const dispatch = useDispatch()

    const [name, inputName] = useState()
    const [tel, inputTel] = useState()
    const [email, inputEmail] = useState()
    const [passwordOne, inputPasswordOne] = useState()
    const [passwordTwo, inputPasswordTwo] = useState()

    let checkPass

    function AddNewUser () {
        let newName = name
        let newTel = tel
        let newEmail = email
        let newPasswordOne = passwordOne
        let newPasswordTwo = passwordTwo

        if (newPasswordOne != newPasswordTwo) {
            checkPass = true
        } else {
            let personalId = profile.length + 1
            dispatch(addUser({personalId, newName, newTel, newEmail, newPasswordOne}))
            return <Navigate to='/profile' />
        }
    }

    return (
        <div className="AddNewUser">
            <nav>
                <ul className='Main-nav'>
                    <li className='Main-li'><Link to="/" className='Main-li-link'>Главная</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Пожалуйста, заполните эту форму, чтобы создать учетную запись</h1>
                <div className='NewUser'>
                    <form className='NewUser-form'>
                        <label for='name' className='NewUser-label'>Имя пользователя</label>
                        <input type='text' name='name' required placeholder='Иванов'
                        onChange={(e) => inputName(e.target.value)}
                        className='NewUser-input'
                        ></input>

                        <label for='phone' className='NewUser-label'>Номер телефона</label>
                        <input type='phone' name='phone' required placeholder='89999999999' 
                        pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$'
                        maxLength='12'
                        minLength='11'
                        onChange={(e) => inputTel(e.target.value)}
                        className='NewUser-input'
                        ></input>

                        <label for='email' className='NewUser-label'>Электронная почта</label>
                        <input type='email' name='email' required placeholder='test@test.test'
                        onChange={(e) => inputEmail(e.target.value)}
                        className='NewUser-input'
                        ></input>
                    
                        <label for='password' className='NewUser-label'>Пароль</label>
                        <input type='password' name='password' required minLength='4'
                        onChange={(e) => inputPasswordOne(e.target.value)}
                        className='NewUser-input'
                        ></input>

                        <label for='seccondPassword' className='NewUser-label'>Повторите пароль</label>
                        <input type='password' name='seccondPassword' required
                        onChange={(e) => inputPasswordTwo(e.target.value)}
                        className='NewUser-input'
                        ></input>

                        <div>{checkPass ? <p>Введенные пароли не совпадают</p> : null}</div>

                        <button onClick={AddNewUser} className='NewUser-btn'>Зарегистрироваться</button>
                    </form>
                </div>
            </div>        
        </div>
    )
}

export default AddNewUser