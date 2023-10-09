import React from 'react';
import './Header.css'
import HeaderTitle from "./Title/HeaderTitle";
import HeaderOptions from "./Options/HeaderOptions";
import HeaderLogo from "./Logo/HeaderLogo";

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