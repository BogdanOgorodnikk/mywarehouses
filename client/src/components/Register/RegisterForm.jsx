import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { registration } from '../../actions/user';
import '../../scss/register/registerform.scss'

const RegisterForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [names, setNames] = useState("")
    const [phone, setPhone] = useState("")
    const history = useHistory();

    function register(e) {
        e.preventDefault()
        if(password !== confirmPassword) {
            return alert('Відбулася помилка')
        }
        registration(email,password,names,phone)
        history.push('/login')
    }

    return (
        <div className="register-forms">
            <div className="container">
                <div className="opinion-auth"></div>
                <div className="register-form__box">
                    <h2 className="register-form__box--headline">Реєстрація</h2>
                    <form className="register-form">
                        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} className="register-form__input input" placeholder="Email" />
                        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="register-form__input input" placeholder="Пароль" />
                        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} className="register-form__input input" placeholder="Підтвердіть пароль" />
                        <input type="text" value={names} onChange={(event) => setNames(event.target.value)} className="register-form__input input" placeholder="Ім'я" />
                        <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} className="register-form__input input" placeholder="Номер телефона" />
                        <button onClick={register} className="register-form__button button">Зареєструватись</button>
                    </form>
                    <p className="register-form__box--register">Вже маєте аккаунт? <Link to="/login">Нажміть для авторизації</Link></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;