import React from 'react';
import './TypeSelector.css';
import '../Selector.css';

function TypeSelector(props) {

    function onTypeChangeHandler(event){
        props.onTypeChange(event.target.value);
    }

    return (
        
        <div className='main__menu__device__selector'>
            <select value={props.currentType} onChange={onTypeChangeHandler}>
                {
                    props.types.map(element =>
                        <option key={element} value={element}>{element}</option>)
                }
            </select>
        </div>
    );
}

export default TypeSelector;