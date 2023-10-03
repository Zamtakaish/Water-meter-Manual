import React from 'react';
import './ControlPanel.css';
import ControlPanelElement from "./ControlPanelElement";

function ControlPanel(props) {
    return (
        <ul className='main__workspace__controlPanel'>
            <ControlPanelElement/>
            <ControlPanelElement/>
            <ControlPanelElement/>
            <ControlPanelElement/>
            <ControlPanelElement/>
            <ControlPanelElement/>
        </ul>
    );
}

export default ControlPanel;