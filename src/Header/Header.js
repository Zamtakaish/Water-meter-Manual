import React from 'react';
import './Header.css'
import HeaderTitle from "./Title/HeaderTitle";
import HeaderOptions from "./Options/HeaderOptions";
import HeaderLogo from "./Logo/HeaderLogo";

function Header(props) {
    return (
        <div className='header'>
            <HeaderLogo/>
            <HeaderTitle/>
            <HeaderOptions/>
        </div>
    );
}

export default Header;