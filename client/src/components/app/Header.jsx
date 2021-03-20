import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import Logo from '../../img/logo.png';
import { logout } from '../../reducers/userReducer';
import '../../scss/app/header.scss';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)

    return (
        <header className="header">
            <div className="container">
                <div className="header__box">
                    <Link to="/">
                    <img src={Logo} className="header__images" />
                    </Link>
                    <div className="header__item">
                        <p className="header__item--info">{user.role_id === 1 && '[Клієнт]:' ||  user.role_id === 2 && '[Менеджер]:' || user.role_id === 3 && '[Адміністратор]:'} {user.name}</p>
                        <p className="header__item--info" onClick={() => {dispatch(logout()); history.push('/login')} }>Вийти</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;