import React from 'react';
import './ControlPanelElement.css'

function ControlPanelElement(props) {

    return (
        <li className='main__workspace__controlPanel-element'>{props.value}</li>
    );
}

export default ControlPanelElement;