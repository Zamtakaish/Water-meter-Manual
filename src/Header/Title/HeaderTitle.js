import React from 'react';
import './HeaderTitle.css';
import HeaderTypeSwitch from "./HeaderTypeSwitch";

function HeaderTitle(props) {
    return (
        <div className='header__title'>
            <h2 className='header__title-description'>Методическое пособие по поверке теплосчётчиков и расходомеров
                компании "Вэдэм-Сервис"</h2>
            <HeaderTypeSwitch/>
        </div>
    );
}

export default HeaderTitle;