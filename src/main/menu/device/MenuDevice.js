import React, {useState} from 'react';
import './MenuDevice.css';
import TypeSelector from "./type/TypeSelector";
import ModelSelector from "./model/ModelSelector";

function MenuDevice(props) {

    const deviceList = [
        {type: 'ТЭМ', model: ['05', '104', '104-1', '104-2', '104-К']},
        {type: 'ТЭРМ', model: ['Старый', 'Новый']},
        {type: 'Струмень', model: ['TC-02', 'ТС-03', 'ТС-05', 'ТС-07', 'ТВ-07']},
        {type: 'Эско-МТР', model: ['06']},
        {type: 'СКМ', model: []},
        {type: 'SKU', model: ['01', '02']}
    ];

    const [currentDeviceType, setCurrentDeviceType] = useState(deviceList[0].type)
    const deviceTypeList = deviceList.map(el =>{return el.type});

    const modelsList = deviceList[deviceList.findIndex(element => element.type === currentDeviceType)].model;//ES6 (2015)

    function changeImage() {
        console.log('ЫХ');
    }

    return (
        <div className='main__menu__device'>
            <TypeSelector currentType={currentDeviceType} types={deviceTypeList} onTypeChange={setCurrentDeviceType}/>
            <ModelSelector models={modelsList} onModelChange={changeImage}/>
        </div>
    );
}

export default MenuDevice;