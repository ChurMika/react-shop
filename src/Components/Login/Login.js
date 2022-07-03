import { React, useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Login.css'

export default function Login (props) {

    const profiles = useSelector((state) => state.profiles.profiles) 
    console.log(profiles);
    
    const [email, inputEmail] = useState()
    const [password, inputPassword] = useState()

    let mistake

    function login () {
        let checkEmail = email
        let checkPassword = password

        profiles.forEach((el) => {
            console.log(el.email);
            if (el.email === checkEmail && el.email === 'admin@admin.ru' && el.password === checkPassword) {
                return <Navigate to='/admin' />
            } else if (el.email === checkEmail && el.password === checkPassword) {
                return <Navigate to='/profile' />
            } else if (el.email === checkEmail && el.password != checkPassword) {
                mistake = ' '
            } else if (el.email != checkEmail) {
                mistake = ' '
            }
        })
        
    }

    return (
        <div className="Login">
            <nav>
                <ul className='Main-nav'>
                    <li className='Main-li'><Link to="/" className='Main-li-link'>Главная</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Войти</h1>
                <div className='Login-form'>
                    <form className='Form'>
                        <label for='email' className='Label'>Введите электронную почту</label>
                        <input type='email' name='email' className='Input' 
                        required
                        onChange={(e) => inputEmail(e.target.value)}>

                        </input>
                        
                        <label for='password' className='Label'>Введите пароль</label>
                        <input type='password' name='password' className='Input' 
                        required 
                        minLength="4"
                        onChange={(e) => inputPassword(e.target.value)}
                        ></input>

                        <div className='Buttons'>
                            <button onClick={login}>Войти</button>
                            <Link to="/newUser">Зарегистроваться</Link>
                        </div>
                        <div>{mistake? <p>Вы ввели неправильный пароль </p> : null}</div>
                    </form>
                </div>
            </div>          
        </div>
    )
}

