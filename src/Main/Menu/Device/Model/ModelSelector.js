import React, {useState} from 'react';
import './ModelSelector.css';
import '../Selector.css';

function ModelSelector(props) {

    const [currentModel, setCurrentModel] = useState(props.models.length !== 0 ?props.models[0] : 'None');

    function onModelChangeHandler(event){
        setCurrentModel(event.target.value);
        props.onModelChange();
    }

    if (props.models.length !== 0){
        return (
            <div className='main__menu__device__selector'>
                <select value={currentModel} onChange={onModelChangeHandler}>
                       {
                           props.models.map(element => <option value={element}>{element}</option>)
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