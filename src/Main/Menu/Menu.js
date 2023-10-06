import React from 'react';
import './Menu.css';
import MenuImage from "./Image/MenuImage";
import MenuDevice from "./Device/MenuDevice";

function Menu(props) {
    return (
        <div className='main__menu'>
            <MenuImage />
            <MenuDevice />
        </div>
    );
}

export default Menu;