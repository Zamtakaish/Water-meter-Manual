import React from 'react';
import './Main.css';
import Content from "./Content/Content";
import ControlPanel from "./ControlPanel/ControlPanel";
import Menu from "./Menu/Menu";

function Main(props) {
    return (
        <div className='main'>
            <Menu />
            <div className='main__workspace'>
                <ControlPanel />
                <Content />
            </div>
        </div>
    );
}

export default Main;