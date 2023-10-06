import React from 'react';
import './TypeElement.css';

function TypeElement(props) {
    return (
        <li className='main__menu__device__type-element'>{props.name}</li>
    );
}

export default TypeElement;