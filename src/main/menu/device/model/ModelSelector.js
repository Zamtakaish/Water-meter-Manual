import React from 'react';
import './ModelSelector.css';
import '../Selector.css';

function ModelSelector(props) {


    function onModelChangeHandler(event){
        props.onModelChange(event.target.value);
    }

    if (props.models.length !== 0){
        return (
            <div className='main__menu__device__selector'>
                <select value={props.currentModel} onChange={onModelChangeHandler}>
                       {
                           props.models.map(element => <option key={element}
                                                               value={element}>
                               {element}
                           </option>)
                       }
                </select>
            </div>
        );
    } else {
        return (
            <div className='selector_placeholder'/>
        );
    }

}

export default ModelSelector;