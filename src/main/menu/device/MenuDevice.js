import React from 'react';
import './MenuDevice.css';
import TypeSelector from "./type/TypeSelector";
import ModelSelector from "./model/ModelSelector";
import Test from "./Test";

function MenuDevice(props) {

    return (
        <div className='main__menu__device'>
            <TypeSelector currentType={props.currentType}
                          types={props.typesList}
                          onTypeChange={props.onTypeChange}/>
            <ModelSelector currentModel={props.currentModel}
                           models={props.modelsList}
                           onModelChange={props.onModelChange}/>
            <Test currentModel={props.currentModel}
                  models={props.modelsList}
                  onModelChange={props.onModelChange}/>
        </div>
    );
}

export default MenuDevice;