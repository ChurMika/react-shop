import React from 'react'
import { Link, Redirect } from 'react-router-dom'

export default function Login (props) {

    
    //admin@admin.ru

    return (
        <div className="Login">
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                </ul>
            </nav>
            <div>
                <h1>Войти</h1>
                <form>
                    <label for='email'>Введите электронную почту</label>
                    <input type='email' name='email'></input>
                    <br/>
                    <label for='password'>Введите пароль</label>
                    <input type='password' name='password'></input>
                    <Link to="/profile">Войти</Link>
                </form>
                <Link to="/newUser">Зарегистроваться</Link>
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