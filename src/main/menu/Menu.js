import React from 'react';
import './Menu.css';
import MenuImage from "./image/MenuImage";
import MenuDevice from "./device/MenuDevice";

function Menu(props) {
    return (
        <div className='main__menu'>
            <MenuImage />
            <MenuDevice />
        </div>
    );
}

export default Menu;