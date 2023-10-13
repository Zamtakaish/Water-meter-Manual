import React, {useState} from 'react';

function Test(props) {

    const [selectorActive, setSelectorActive] = useState(false)

    function onModelChangeHandler(event){
        props.onModelChange(event.target.value);
    }

    function onClickHandler(){
        setSelectorActive(selectorActive =>  !selectorActive) ;
        console.log('clicked');
    }

    if (selectorActive) {
        return (
            <div className='main__menu__device__selector test_wrapper'>
                <div className='test' onClick={onClickHandler}>{props.currentModel}</div>
                <div className='custom_selector_wrapper'>
                    <ul className='custom_selector' value={props.currentModel} onChange={onModelChangeHandler}>
                        {
                            props.models.map(element => <li key={element}
                                                            value={element} className='custom_selector_child'>
                                {element}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='main__menu__device__selector test_wrapper' onClick={onClickHandler}>
                <div className='test'>{props.currentModel}</div>
            </div>
        );
    }


}

export default Test;