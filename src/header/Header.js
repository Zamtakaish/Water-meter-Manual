import React from 'react';
import './Header.css'
import HeaderTitle from "./title/HeaderTitle";
import HeaderOptions from "./options/HeaderOptions";
import HeaderLogo from "./logo/HeaderLogo";

function Header(props) {

    function transitDeviceClassChangeToApp(newState){
        props.changeDeviceClass(newState);
    }

    return (
        <div className='header'>
            <HeaderLogo/>
            <HeaderTitle transitChanges={transitDeviceClassChangeToApp}/>
            <HeaderOptions/>
        </div>
    );
}

export default Header;