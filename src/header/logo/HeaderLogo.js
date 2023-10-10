import React from 'react';
import './HeaderLogo.css';
import logo from '../../assets/images/VedemLogo.png';

function HeaderLogo(props) {
    return (
        <div className='header__logo'>
            <img className='header__logo-image' src={logo} alt="logo"/>
            <h2 className='header__logo-company'>Вэдэм Сервис</h2>
        </div>
    );
}

export default HeaderLogo;