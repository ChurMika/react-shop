import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Login.css'
export default function Login (props) {

    
    //admin@admin.ru

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
                        required>

                        </input>
                        
                        <label for='password' className='Label'>Введите пароль</label>
                        <input type='password' name='password' className='Input' 
                        required 
                        minlength="4"
                        ></input>

                        <div className='Buttons'>
                            <Link to="/profile">Войти</Link>
                            <Link to="/newUser">Зарегистроваться</Link>
                        </div>
                        
                    </form>
                </div>
            </div>          
        </div>
    )
}

/*export default function Login(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [isSigningUp, setIsSigningUp] = React.useState(false)

    const handleChangeEmail = (e) => setEmail(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)
    const handleIsSigningUpChange = (e) => setIsSigningUp(e.target.checked)

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    const handleSignUp = async () => {
        try {
            await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
        } catch (error) {
            setError(error.message)
        }
    }

    const handleSubmit = () => {
        console.log('Пытемся залогиниться', { email, password })

        if (!email || !password) {
            setError('Заполните поля')
            return
        }

        if (isSigningUp) {
            handleSignUp()
            return
        }

        handleLogin()
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <p>{isSigningUp ? 'Sign up' : 'Login'}</p>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isSigningUp}
                        onChange={handleIsSigningUpChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label={<p>Еще нет учетной записи?</p>}
            />
            <TextField
                className="child__text-field"
                variant="outlined"
                placeholder="Email"
                value={email}
                type="email"
                onChange={handleChangeEmail}
            />
            <TextField
                className="child__text-field"
                variant="outlined"
                placeholder="Password"
                value={password}
                type="text"
                onChange={handleChangePassword}
            />

            <button onClick={handleSubmit}>
                {isSigningUp ? 'Sign up' : 'Login'}
            </button>

            <hr />
            <p>{error}</p>
        </div>
    )
}*/