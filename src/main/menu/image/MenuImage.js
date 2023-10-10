import React from 'react';
import './MenuImage.css';

function MenuImage(props) {

    const imagesSet = [
        { type: 'tyem', models: [{model: '05', path: require(`../../../assets/devices/heatmeters/tyem/img/tyem-05.png`)},
                {model: '104', path: require(`../../../assets/devices/heatmeters/tyem/img/tyem-104.png`)},
                {model: '104-К', path: require(`../../../assets/devices/heatmeters/tyem/img/tyem-104-k.png`)}]},
        {type: 'therm', models: [{model: '02', path: require(`../../../assets/devices/heatmeters/therm/img/therm-02.png`)}]},
        {type: 'esco-mtr', models: [{model: '06', path: require(`../../../assets/devices/heatmeters/esco-mtr/img/esco-mtr-06.png`)}]},
        {type: 'skm', models: [{model: '02', path: require(`../../../assets/devices/heatmeters/skm/img/skm-02.png`)}]},
        {type: 'sku', models: [{model: '01', path: require(`../../../assets/devices/heatmeters/sku/img/sku-01.png`)},
                {model: '02', path: require(`../../../assets/devices/heatmeters/sku/img/sku-02.png`)}]},
        {type: 'strumen', models: [{model: 'ТС-03', path: require(`../../../assets/devices/heatmeters/strumen/img/strumen-ts-05.png`)},
                {model: 'ТС-05', path: require(`../../../assets/devices/heatmeters/strumen/img/strumen-ts-05.png`)},
                {model: 'ТС-07', path: require(`../../../assets/devices/heatmeters/strumen/img/strumen-ts-05.png`)},
                {model: 'ТС-07-К6', path: require(`../../../assets/devices/heatmeters/strumen/img/strumen-ts-07-k6.png`)},
                {model: 'ТС-07-К7', path: require(`../../../assets/devices/heatmeters/strumen/img/strumen-ts-07-k7.png`)},
                {model: 'ТС-07-30-8', path: require(`../../../assets/devices/heatmeters/strumen/img/strumen-ts-07-30-8.png`)}]}
    ]


    function getPath(){
        for (const item of imagesSet){
            if (item.type === props.typeTag){
                for (const imageModel of item.models){
                    if (imageModel.model === props.model)
                        return imageModel.path;
                }
            }
        }
    }

    const imagePath = getPath();


    return (
        <div className='main__menu__image'>
            <img className='main__menu__image-img' src={imagePath} alt='device'/>
            <div className='main__menu__image-title'>{props.typeName + '-' + props.model}</div>
        </div>
    );
}

export default MenuImage;