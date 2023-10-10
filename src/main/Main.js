import React from 'react';
import './Main.css';
import Content from "./content/Content";
import ControlPanel from "./control_panel/ControlPanel";
import Menu from "./menu/Menu";

function Main(props) {
    return (
        <div className='main'>
            <Menu />
            <div className='main__workspace'>
                <ControlPanel deviceClass={props.deviceClass}/>
                <Content />
            </div>
        </div>
    );
}

export default Main;