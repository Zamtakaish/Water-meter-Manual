import React, {useState} from 'react';
import './HeaderTypeSwitch.css';

function HeaderTypeSwitch(props) {

    const deviceClassList = ['Теплосчётчики', 'Водомеры'];
    const [deviceClass, setDeviceClass] = useState(0);

    function switchDeviceClassHandler(event){
        const currentId = +event.target.id;
        if (currentId !== deviceClass){
            setDeviceClass(currentId);
            props.deviceClassChanged(currentId);
        }
    }

    function mapIterator(element, id, array) {
        let fullClassName = 'header__title__typeSwitch-button';
        if (id === deviceClass) {
            fullClassName += ' active'
        }
        return <button
            key={id}
            id={id}
            className={fullClassName}
            onClick={switchDeviceClassHandler}>
            {element}</button>

    }

    return (
        <div className='header__title__typeSwitch'>
            {
                deviceClassList.map((element, id) => mapIterator(element, id))
            }
        </div>
    );
}

export default HeaderTypeSwitch;