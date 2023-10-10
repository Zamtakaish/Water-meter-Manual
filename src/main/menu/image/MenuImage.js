import React from 'react';
import './MenuImage.css';
import device from '../../../assets/images/TYEM-104.png';

function MenuImage(props) {
    return (
        <div className='main__menu__image'>
            <img className='main__menu__image-img' src={device} alt='device'/>
            <div className='main__menu__image-title'>ТЭМ-104</div>
        </div>
    );
}

export default MenuImage;