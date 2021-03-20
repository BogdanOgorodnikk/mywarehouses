import React from 'react';
import { Link } from "react-router-dom"
import '../../scss/app/nav.scss'

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to={"/"} className="nav__link">Склади</Link>
                </li>
                <li className="nav__item">
                    <Link to={"/orders"} className="nav__link">Замовлення</Link>
                </li>
                <li className="nav__item">
                    <Link to={"/myaccount"} className="nav__link">Мій аккаунт</Link>
                </li>
                <li className="nav__item">
                    <Link to={"/profit"} className="nav__link">Дохід</Link>
                </li>
                <li className="nav__item">
                    <Link to={"/allusers"} className="nav__link">Всі користувачі</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;