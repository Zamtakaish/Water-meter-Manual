import React from 'react';
import './HeaderTypeSwitch.css';

function HeaderTypeSwitch(props) {
    return (
        <div className='header__title__typeSwitch'>
            <button className='header__title__typeSwitch-button'>Теплосчётчики</button>
            <button className='header__title__typeSwitch-button'>Водомеры</button>
        </div>
    );
}

export default HeaderTypeSwitch;