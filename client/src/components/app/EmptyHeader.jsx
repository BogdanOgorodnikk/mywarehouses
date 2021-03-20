import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../img/logo.png';

const EmptyHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="empty-header__box">
                    <Link to="/login">
                        <img src={Logo} className="header__images" style={{margin: '0 auto'}} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default EmptyHeader;