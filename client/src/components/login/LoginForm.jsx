import React, {useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/user';
import '../../scss/login/loginform.scss'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory();

    function auth(event) {
        event.preventDefault(); 
        dispatch(login(email, password))
        console.log(dispatch(login(email, password)))
        history.push('/')
    }

    return (
        <div className="login-form">
            <div className="container">
                <div className="opinion-auth"></div>
                <div className="login-form__box">
                    <h2 className="login-form__box--headline">Авторизація</h2>
                    <form className="auth-form">
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" className="auth-form__input input" placeholder="Email" />
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="auth-form__input input" placeholder="Пароль" />
                        <button onClick={auth} className="auth-form__button button">Авторизуватись</button>
                    </form>
                    <p className="login-form__box--register">Ще не маєте аккаунт? <Link to="/register">Нажміть для реєстрації</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;