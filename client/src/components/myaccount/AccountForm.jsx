import React from 'react';
import '../../scss/myaccount/accountform.scss'

const AccountForm = () => {
    return (
        <div className="my-account">
            <div className="container">
                <h2 className="my-account__headline">Редагування особистого профіля</h2>
                <form className="account-form">
                    <input type="text" className="account-form__input input" placeholder="Email" />
                    <input type="text" className="account-form__input input" placeholder="Пароль" />
                    <input type="text" className="account-form__input input" placeholder="Ім'я" />
                    <input type="text" className="account-form__input input" placeholder="Номер телефона" />
                    <button className="account-form__button button">Змінити</button>
                </form>
            </div>
        </div>
    )
}

export default AccountForm;