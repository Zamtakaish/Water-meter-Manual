import React, {useState} from 'react';
import './Menu.css';
import MenuImage from "./image/MenuImage";
import MenuDevice from "./device/MenuDevice";

function Menu(props) {

    const deviceList = [
        {type: 'ТЭМ', tag: 'tyem', model: ['05', '104', '104-К']},
        {type: 'ТЭРМ', tag: 'therm', model: ['02']},
        {type: 'Струмень', tag: 'strumen', model: ['ТС-03', 'ТС-05', 'ТС-07', 'ТС-07-30-8', 'ТС-07-К6', 'ТС-07-К7']},
        {type: 'Эско-МТР', tag: 'esco-mtr', model: ['06']},
        {type: 'СКМ', tag: 'skm', model: ['02']},
        {type: 'SKU', tag: 'sku', model: ['01', '02']}
    ];

    const typesList = deviceList.map(el => el.type);

    const [currentDeviceId, setCurrentDeviceId] = useState(0);
    const currentDeviceType = deviceList[currentDeviceId].tag;

    const [currentModel, setCurrentModel] = useState(deviceList[currentDeviceId].model.length !== 0 ?
        deviceList[currentDeviceId].model[0] : '');

    const modelsList = deviceList[currentDeviceId].model;

    function typeChangeHandler(type) {
        const currentDeviceIndex = deviceList.findIndex(element => element.type === type);
        setCurrentDeviceId(currentDeviceIndex);//ES6 (2015)
        setCurrentModel(deviceList[currentDeviceIndex].model.length !== 0 ?
            deviceList[currentDeviceIndex].model[0] : '')
    }

    function modelChangeHandler(model) {
        setCurrentModel(model);
    }

    return (
        <div className='main__menu'>
            <MenuImage typeName={deviceList[currentDeviceId].type} typeTag={currentDeviceType} model={currentModel} />
            <MenuDevice currentType={deviceList[currentDeviceId].type}
                        curentModel={currentModel}
                        typesList={typesList}
                        modelsList={modelsList}
                        onTypeChange={typeChangeHandler}
                        onModelChange={modelChangeHandler}/>
        </div>
    );
}

export default Menu;